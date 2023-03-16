<template>
    <div class="row align-items-md-stretch">
        <div class="col-md-6 mb-4">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2 class="text-center">App support</h2>
                <div class="row">
                    <router-link to="/three" class="app-link col-6"><img class="rounded-3 m-2 img-fluid" src="https://xumm-cdn.imgix.net/app-logo/fc684d61-23f0-493f-be1e-e30461edc9b7.png" /></router-link>
                    <router-link to="/flush" class="app-link col-6"><img class="rounded-3 m-2 img-fluid" src="https://xumm-cdn.imgix.net/app-logo/f652d302-c5de-4240-a2d8-44f9e84b85bf.png" /></router-link>
                    <router-link to="/multisig" class="app-link col-6"><img class="rounded-3 m-2 img-fluid" src="https://xumm-cdn.imgix.net/app-logo/0d755800-17eb-410e-9357-cb1485b22c40.png" /></router-link>
                    <router-link to="/xrpswap" class="app-link col-6"><img class="rounded-3 bg-white m-2 img-fluid" src="https://xumm-cdn.imgix.net/app-logo/b93593a4-5b07-4a80-8c01-779f3a097016.png" /></router-link>
                </div>
            </div>
        </div>
       <div class="col-md-6 mb-4">
            <div class="p-5 bg-light border rounded-3 mb-4">
                <h2><span class="glyphicon" :class="isExchangeConnected('submission') ? 'one-fine-green-dot':'one-fine-red-dot'"></span> Submission Node</h2>
                <p class="mb-3">wss://node.panicbot.xyz</p>
                <ul>
                    <li>ledger: {{ server['submission'].ledger }}</li>
                    <li>peers: {{ server['submission'].peers }}</li>
                    <li>state: {{ server['submission'].state }}</li>
                    <li>version: {{ server['submission'].build_version }}</li>
                </ul>
                
                <small>
                    The primary node used for all three's apps quering the XRPL. 
                    A non data center node, so availablity is primary dependant on ISP provider.
                </small>
            </div>
            <div class="p-5 bg-white border rounded-3">
                <h2><span class="glyphicon" :class="isExchangeConnected('validator') ? 'one-fine-green-dot':'one-fine-red-dot'"></span> Validator Node</h2>
                <p class="mb-3">https://panicbot.app</p>
                <ul>
                    <li>ledger: {{ server['validator'].ledger }}</li>
                    <li>peers: {{ server['validator'].peers }}</li>
                    <li>state: {{ server['validator'].state }}</li>
                    <li>version: {{ server['validator'].build_version }}</li>
                </ul>
                
                <small>
                    A well maintained Validator on the XRPL run by @ShortTheFomo. Currently located in a data center with plans to move on premisis.
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    import { XrplClient } from 'xrpl-client'
    
    // import { Modal, Toast } from 'bootstrap'

    export default {
        name: 'Apps',
        props: { msg: String },
        data() {
            return {
                submission: new XrplClient(import.meta.env.VITE_APP_SUBMISSION),
                validator: new XrplClient(import.meta.env.VITE_APP_VALIDATOR),
                interval: null,
                server: {
                    submission: {
                        online: false,
                        uptime: 0,
                        peers: 0,
                        ledger: null,
                        state: '-',
                        build_version: '',
                        pubkey_node: ''
                    },
                    validator: {
                        online: false,
                        uptime: 0,
                        peers: 0,
                        ledger: null,
                        state: '-',
                        build_version: '',
                        pubkey_node: ''
                    },
                },
                isLoading: true
            }
        },
        async mounted() {
            this.isConnected()
            this.watchClose()

            this.isLoading = false
            const self = this
            this.interval = setInterval(() => {
                self.isConnected()
            }, 10000)
        },
        methods: {
            watchClose() {
                if (!this.isLoading) { return }
                const self = this
                this.submission.on('ledger', async (event) => {
                    const request = {
                        'id': 'xrpl-local',
                        'command': 'ledger',
                        'ledger_hash': event.ledger_hash,
                        'ledger_index': "validated",
                        'transactions': true,
                        'expand': true,
                        'owner_funds': true
                    }
                    //console.log('event.ledger_hash', event.ledger_hash)
                    const ledger_result = await self.submission.send(request)
                    self.server['submission'].ledger = ledger_result?.ledger?.ledger_index
                })
                this.validator.on('ledger', async (event) => {
                    const request = {
                        'id': 'xrpl-local',
                        'command': 'ledger',
                        'ledger_hash': event.ledger_hash,
                        'ledger_index': "validated",
                        'transactions': true,
                        'expand': true,
                        'owner_funds': true
                    }
                    //console.log('event.ledger_hash', event.ledger_hash)
                    const ledger_result = await self.validator.send(request)
                    self.server['validator'].ledger = ledger_result?.ledger?.ledger_index
                })
            },
            async submissionState() {
                let status = true

                const server_info = await this.submission.send({'id': 1, 'command': 'server_info'})
                // console.log('submission state', server_info)
                if ('error' in server_info) {
                    status = false
                }
                if (server_info.info.server_state != 'full') {
                    status = false
                }
                this.setServerState('submission', status, server_info.info)
            },
            async validatorState() {
                let status = true

                const server_info = await this.validator.send({'id': 1, 'command': 'server_info'})
                // console.log('validator state', server_info)
                if ('error' in server_info) {
                    status = false
                }
                if (server_info.info.server_state != 'full') {
                    status = false
                }
                this.setServerState('validator', status, server_info.info)
            },
            async isConnected() {
                this.submissionState()
                this.validatorState()
            },
            setServerState(node, status = false, info) {
                this.server[node].online = status
                this.server[node].peers = info?.peers
                this.server[node].uptime = info?.uptime
                this.server[node].state = info?.server_state
                this.server[node].build_version = info?.build_version
                this.server[node].ledger = info?.validated_ledger.seq
                this.server[node].pubkey_node = info?.pubkey_node
            },
            isExchangeConnected(node) {
                return this.server[node].online
            }
        }
    }
</script>

<style lang="scss" scoped>
    $bl: rgb(39, 41, 43);
    $blc: rgba($bl, 0.03);
    $lblc: rgba($bl, 0.1);
    $dive: 0.75rem;

    a.app-link img {
            
    }
    .emerge-11 {
        z-index: 11;
    }

    .bd-example-row {
        .row {
            & > [class^="col-"] {
                padding-top: $dive;
                padding-bottom: $dive;
                background-color: $blc;
                border: 1px solid $lblc;
            }
        }
    }
</style>
