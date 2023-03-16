<template>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Launch app</h1>
            <p class="col-md-8 fs-4">Open the app in XUMM</p>
            <a class="btn btn-primary" href="https://xumm.app/detect/xapp:lathan.nftflush" target="_bank">open xumm</a>
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
                            <img src="../assets/IMG_4658-min.jpg" />
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
                <p>NFT offers present on your wallet are loaded into the app. Pesents of the action buttons at the top are dependant on the offers you have open and NFTs selected below.</p>
                <p>There are 3 button options that may or maynot be present.</p>
                <ol>
                    <li><strong>flush orphaned offers</strong> removes offers where buy the owner of the NFT has changed</li>
                    <li><strong>flush all buy offers</strong> removes all open open buy offers</li>
                    <li><strong>flush selected</strong> removes only the selected items from the table below</li>
                </ol>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center mb-3 mb-md-0">
                <h2>Open offers</h2>
                <p>The table below with open orders, lists both sell and buy orders. If possible the image is loaded next to the offer along with the amount the offer is for.</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="iphone-x ms-0 ms-md-auto">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4659-min.jpg" />
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
                            <img src="../assets/IMG_4660-min.jpg" />
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
                <h2>Open offer selection</h2>
                <p>You are able to select (tap) the orders you wish to clear simply tap the offers you want to clear, then scroll back to the top and select the <strong>flush selected button</strong>.</p>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center mb-3 mb-md-0">
                <h2>Action selection</h2>
                <p>As we can see now the flush selected button with a counter of the number of items selected appears, tapping that will then open the xumm transaction sign screen.</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="iphone-x ms-0 ms-md-auto">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4661-min.jpg" />
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
                            <img src="../assets/IMG_4663-min.jpg" />
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
                <h2>Signing the flush transaction</h2>
                <p>The token id's of all the selected tokens will appear in a list that you have perviously selected. Review those the transaction(s) and fee then proceed to sign.</p>
                <p>Cancel transaction are againt the XRPL, so no matter in which store this offer was created it will now be cleared. Now you have a single place to clear all those lost orders. Each offer cancel will <strong>return 2 XRP</strong> that was held as reserve for the offer transaction. The total amount to be returned is calculated and displayed.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Flush',
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