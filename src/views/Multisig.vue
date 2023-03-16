<template>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Launch app</h1>
            <p class="col-md-8 fs-4">coming soon.. in dev</p>
            <a class="btn btn-primary disabled" href="https://xumm.app/detect/xapp:lathan.multisig" target="_bank" aria-disabled="true">open xumm</a>
        </div>
    </div>
    <div class="row justify-content-md-center">
        <div class="messages">
            <div class="alert alert-primary" role="alert">
                this xApp requires the use of the <a href="https://xumm.app" target="_blank">Xumm Wallet</a>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 col-md-6 mb-3 mb-md-0">
                <div class="iphone-x">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4665-min.jpg" />
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="header">
                        <div class="sensor-1"></div>
                        <div class="sensor-2"></div>
                        <div class="sensor-3"></div>
                    </div>
                    <div class="volume-button"></div>
                    <div class="power-button"></div>
                </div>
            </div>
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center">
                <h2>App load</h2>
                <p>Once logged into the app, the landing screen has a few status displays. If the master key has been disabled, the key icon is pink. If the account has a multisign list attached to it the list icon turns black. If a regular key has been linked, the chain icon turns black.</p>
                <p>In this example, we can see that the account has its master-key disabled, it has no signer list and it has a regular key set. The public address of the regular key is also shown in black if present below the public address of this account in yellow.</p>
                <p>There are 3 button options that are present.</p>
                <ol>
                    <li><strong>restore/remove master key</strong> removes or restores the master key of this account</li>
                    <li><strong>create/edit signer list</strong> create or edits a existing signer list</li>
                    <li><strong>assign regular key</strong> updates and replaces a regular key</li>
                </ol>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center mb-3 mb-md-0">
                <h2>Tapping Remove/Restore Master Key</h2>
                <p>You are directed to the signer screen directly, review the transaction and accept if you are happy. If you wish to keep your master-key safe, disable it and set a regular key in its place. If that gets compromised or simply you wish to change it regularly. Great security starts with you.</p>
                <small>Note the XRPL will not allow an account to be in a state where there is no signer option present.</small>
            </div>
            <div class="col-12 col-md-6">
                <div class="iphone-x ms-0 ms-md-auto">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4666-min.jpg" />
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="header">
                        <div class="sensor-1"></div>
                        <div class="sensor-2"></div>
                        <div class="sensor-3"></div>
                    </div>
                    <div class="volume-button"></div>
                    <div class="power-button"></div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-12 col-md-6 mb-3 mb-md-0">
                <div class="iphone-x">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4667-min.jpg" />
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="header">
                        <div class="sensor-1"></div>
                        <div class="sensor-2"></div>
                        <div class="sensor-3"></div>
                    </div>
                    <div class="volume-button"></div>
                    <div class="power-button"></div>
                </div>
            </div>
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center">
                <h2>Signer Lists</h2>
                <p>They allow you to set multiple accounts that need to collectly meet a weight requirement to successfully sign a transactions. This is very usful at the application levels of software, where by different combinations of signers can come together to meet the signer quorum.</p>
                <small>Mostly for advanced users, though we might see some of this in the user realm with hooks.</small>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center mb-3 mb-md-0">
                <h2>Assign a Regulary Key</h2>
                <p>This is the bread and butter of this app. You should be chaning your key regularly, incase it was compromised at some point. The account used to sign the transaction does not need to be funded. Meaning you can genorate a new on in xumm now. Use it to sign for a perioud then simply replace it at a later date. At zero cost to you.</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="iphone-x ms-0 ms-md-auto">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4668-min.jpg" />
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="header">
                        <div class="sensor-1"></div>
                        <div class="sensor-2"></div>
                        <div class="sensor-3"></div>
                    </div>
                    <div class="volume-button"></div>
                    <div class="power-button"></div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
</template>

<script>
    export default {
        name: 'Multisig',
    }
</script>

<style scoped>
    .iphone-x {
        position: relative;
        z-index: 1;
        height: 694px;
        width: 342px;
    }
    .iphone-x *, .iphone-x *::before, .iphone-x *::after {
        box-sizing: border-box;
        display: block;
    }
    .iphone-x .side {
        background: #1c1c1c;
        border-radius: 54px;
        box-shadow: inset 0 0 2px 2px dimgrey, inset 0 0 0 6px #e2e3e9, 0px -1px 13px 9px rgba(255,255,255,0.8) inset;
        height: 694px;
        padding: 15px 22px;
        width: 342px;
        z-index: 1;
    }
    .iphone-x .screen {
        background:#000;
        background-position: center center;
        background-size: cover;
        border-radius: 33px;
        position: relative;
        height: 652px;
        width: 300px;
        margin-left: -1px;
        margin-top: 6px;
        z-index:198;
        overflow:hidden;
    }
    .screen img {
        height: 100%;
    }
    .iphone-x .line::after, .iphone-x .line::before {
        content: "";
        position: absolute;
        border: solid rgba(68, 68, 68, 0.25);
        border-width: 0 6px;
        height: 5px;
        left: 0;
        width: 100%;
        z-index: 9;
    }
    .iphone-x .line::after {
        top: 68px;
    }
    .iphone-x .line::before {
        bottom: 68px;
    }
    .iphone-x .header {
        background: #1c1c1c;
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
        height: 24px;
        left: 50%;
        margin-left: -82px;
        position: absolute;
        top: 15px;
        width: 164px;
        z-index: 199;
    }
    .iphone-x .sensor-1::after, .iphone-x .sensor-1::before {
        content: "";
        position: absolute;
    }
    .iphone-x .sensor-1::after {
        background: #222;
        border-radius: 50%;
        height: 11px;
        width: 11px;
        left: 1%;
        margin-left: 10px;
        top: 3px;
    }
    .iphone-x .sensor-1::before {
        background: #222;
        border-radius: 50%;
        height: 11px;
        width: 11px;
        left: 10%;
        margin-left: 20px;
        top: 3px;
    }
    .iphone-x .sensor-2::after, .iphone-x .sensor-2::before {
        content: "";
        position: absolute;
    }
    .iphone-x .sensor-2::before {
        background: #333;
        border-radius: 2.5px;
        height: 5px;
        width: 40px;
        left: 50%;
        margin-left: -20px;
        top: 7px;
    }
    .iphone-x .sensor-3::after, .iphone-x .sensor-3::before {
        content: "";
        position: absolute;
    }
    .iphone-x .sensor-3::before {
        background: #444;
        border-radius: 50%;
        height: 11px;
        width: 11px;
        left: 50%;
        margin-left: 35px;
        top: 3px;
        box-shadow:0px 0px 5px 2px navy inset
    }
    .iphone-x .sensor-3::after {
        background: #222;
        border-radius: 50%;
        height: 15px;
        width: 15px;
        left: 65%;
        margin-left: 33px;
    }
    .iphone-x .volume-button {
        background: #c8cacb;
        height: 26px;
        left: -2px;
        position: absolute;
        top: 92px;
        width: 3px;
    }
    .iphone-x .volume-button::after, .iphone-x .volume-button::before {
        content: "";
        position: absolute;
        background: #c8cacb;
        height: 50px;
        left: 0;
        width: 3px;
    }
    .iphone-x .volume-button::after {
        top: 48px;
    }
    .iphone-x .volume-button::before {
        top: 112px;
    }
    .iphone-x .power-button {
        background: #c8cacb;
        height: 80px;
        right: -2px;
        position: absolute;
        top: 160px;
        width: 3px;
    }
</style>