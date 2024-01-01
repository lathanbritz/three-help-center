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
                    <router-link to="/dao-vote" class="app-link col-6"><img class="rounded-3 bg-white m-2 img-fluid" src="https://xumm-cdn.imgix.net/app-logo/9b350a64-d55c-4cc2-b5d7-e9e96b1c9a4a.png" /></router-link>
                </div>
            </div>
        </div>
       <div class="col-md-6 mb-4">
            <div class="p-5 bg-light border rounded-3 mb-4">
                <h2><span class="glyphicon" :class="isExchangeConnected('submission') ? 'one-fine-green-dot':'one-fine-red-dot'"></span> Submission Node 1</h2>
                <!-- <p class="mb-3">wss://node.panicbot.xyz</p> -->
                <ul>
                    <li>geo: Finland</li>
                    <li>ledger: {{ server['submission'].ledger }}</li>
                    <li>peers: {{ server['submission'].peers }}</li>
                    <li>state: {{ server['submission'].state }}</li>
                    <li>version: {{ server['submission'].build_version }}</li>
                    <li>uptime: {{ server['submission'].uptime }}</li>
                    <li>history: {{ server['submission'].complete_ledgers }}</li>
                    <li>pubkey: {{ server['submission'].pubkey_node }}</li>
                </ul>
            </div>
            <div class="p-5 bg-light border rounded-3 mb-4">
                <h2><span class="glyphicon" :class="isExchangeConnected('submission2') ? 'one-fine-green-dot':'one-fine-red-dot'"></span> Submission Node 2</h2>
                <!-- <p class="mb-3">wss://node2.panicbot.xyz</p> -->
                <ul>
                    <li>geo: Finland</li>
                    <li>ledger: {{ server['submission2'].ledger }}</li>
                    <li>peers: {{ server['submission2'].peers }}</li>
                    <li>state: {{ server['submission2'].state }}</li>
                    <li>version: {{ server['submission2'].build_version }}</li>
                    <li>uptime: {{ server['submission2'].uptime }}</li>
                    <li>history: {{ server['submission2'].complete_ledgers }}</li>
                    <li>pubkey: {{ server['submission2'].pubkey_node }}</li>
                </ul>
            </div>
            <div class="p-5 bg-white border rounded-3">
                <h2><span class="glyphicon" :class="isExchangeConnected('validator') ? 'one-fine-green-dot':'one-fine-red-dot'"></span> Validator Node</h2>
                <p class="mb-3">https://panicbot.app</p>
                <ul>
                    <li>key: {{ server['validator'].key }}</li>
                    <li>ledger: {{ server['validator'].ledger }}</li>
                    <li>state: {{ server['validator'].state }}</li>
                    <li>version: {{ server['validator'].build_version }}</li>
                </ul>
                
                <small>
                    A well maintained Validator on the XRPL run by @ShortTheFomo.
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
                submission2: new XrplClient(import.meta.env.VITE_APP_SUBMISSION2),
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
                    submission2: {
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
                        ledger: null,
                        state: '-',
                        build_version: '',
                        key: 'nHBiXWRTwVeDCux4hXsD1AHg96paDtK8AALJ6cCy3UBCzF86h8VA'
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
                this.submission2.on('ledger', async (event) => {
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
                    self.server['submission2'].ledger = ledger_result?.ledger?.ledger_index
                })

                this.submission.send({
                    'command': 'subscribe',
                    'streams': ['validations']
                })
                this.submission.on('validation', async (validation) => {
                    if(validation.validation_public_key === 'n94aSAP9QcYtmKxgCTxcv3xeD2cB6tuwH3mNDQzrjAQ5DTu7SfZi') {
                        self.server['validator'].ledger = validation.ledger_index
                        self.server['validator'].state = (validation.full) ? 'full':'-'
                        self.server['validator'].online = true
                        if ('server_version' in validation) {
                            self.server['validator'].build_version = self.decodeServerVersion(validation.server_version)
                        }
                    }
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
            async submissionState2() {
                let status = true

                const server_info = await this.submission2.send({'id': 1, 'command': 'server_info'})
                // console.log('submission state', server_info)
                if ('error' in server_info) {
                    status = false
                }
                if (server_info.info.server_state != 'full') {
                    status = false
                }
                this.setServerState('submission2', status, server_info.info)
            },
            async isConnected() {
                this.submissionState()
                this.submissionState2()
            },
            setServerState(node, status = false, info) {
                console.log('info', info)
                this.server[node].complete_ledgers = info?.complete_ledgers.split('-')[1] - info?.complete_ledgers.split('-')[0]
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
            },
            decodeServerVersion(server_version) {
                if (!server_version) {
                  return null
                }
              
                const num = BigInt(server_version)
              
                const buf = Buffer.alloc(8)
              
                buf.writeBigInt64BE(num)
              
                if (
                  buf.length !== 8 ||
                  buf[0] !== 0x18 ||
                  buf[1] !== 0x3b ||
                  buf[7] !== 0 ||
                  buf[6] !== 0
                ) {
                  return null
                }
              
                const major = buf[2]
                const minor = buf[3]
                const patch = buf[4]
                const beta = buf[5]
              
                const betaString = this.extractServerVersionType(beta)
              
                if (betaString === null) {
                  return null
                }
              
                return `${major}.${minor}.${patch}${betaString}`
            },
            extractServerVersionType(beta) {
                // eslint-disable-next-line no-bitwise -- Use bit shifts to extract the first 2 bits that contain release version type.
                const typeBits = beta >> 6
                if (typeBits === 0) {
                  return null
                }
              
                const isBeta = typeBits === 1
                const isRC = typeBits === 2
                const isRelease = typeBits === 3
              
                const prefix = isRelease ? '' : '-'
                // eslint-disable-next-line no-nested-ternary -- Nested tenary is used to determine release type based on 2 conditions.
                const releaseType = isBeta ? 'b' : isRC ? 'rc' : ''
              
                // eslint-disable-next-line no-bitwise -- Bit mask is used to extract release number from 8-bit beta.
                const releaseNum = isRelease ? '' : beta & 0x3f
              
                return `${prefix}${releaseType}${releaseNum}`
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
