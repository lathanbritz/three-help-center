<template>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Launch app</h1>
            <p class="col-md-8 fs-4">Open the app in XUMM</p>
            <a class="btn btn-primary" href="https://xumm.app/detect/xapp:lathan.xrpswap" target="_bank">open xumm</a>
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
                            <img src="../assets/IMG_4678-min.jpg" />
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
                <p>As the app loads, you are presented with two primary fields. The top field is the token you are swapping from, and the lower is the one you will receive. Tapping the swap button (in blue) will open the sign transaction request screen in Xumm where you can then approve or decline the transaction.</p>
                <p>The sold and bought currencies are switched by tapping the flip icon.</p>
                <p>The exchange of tokens is achived via the decentralised exchange (DEX) built into the XRPL. There are <em><strong>no oracles involved in this exchange</strong></em> which also means no one can maniplate the exchange rate from off ledger data/services. It uses the available liquidity on the DEX to facilitate this trade, a built in function of the XRPL.</p>
                <p>XRPSwap is simply a user interface to the underlying XRPL functions that are exposed, it is not a oracle nor does it use oracle data.</p>
                <small>*This is achieved via pathing on the XRPL, the availability of the quote reported is time sensitive.</small>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center mb-3 mb-md-0">
                <h2>Show price info</h2>
                <p>Selecting the show price info drop down, one can see the swap price; this is the price at which the swap will happen based on the amount you have filled in to swap. The best price is also shown; this is if you swap a value equivalent to the smallest offer on the order books.</p>
                <p></p>
                <p><strong>Slippage -</strong> this is the most important value on the advanced section and shows how far this order will move the price. You want the smallest slippage possible, try adjusting the amount you want to swap.</p>
                <p>High values like 5% shows there are not enough orders to fill your request, so it is best to avoid swapping at this time.</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="iphone-x ms-0 ms-md-auto">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4680-min.jpg" />
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
                            <img src="../assets/IMG_4681-min.jpg" />
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
                <h2>Currency selection</h2>
                <p>Tap the token string next to each swap value, this opens an overlay whereby one can select any of the tokens present in your wallet.</p>
                <p>A max shortcut icon is also present for the top value, auto-filling the field with the maximum token value you have in your wallet.</p>
                <p>The list of available tokens is dependand on which tokens you have added trustlines for. On the XRPL you have to give the issuer of a token your trust before your self and them are able to exchange their tokens.</p>
            </div>
        </div>
        <hr/>
        <div class="row mb-5">
            <div class="col-12 col-md-6 bg-light rounded-3 align-self-md-center mb-3 mb-md-0">
                <h2>Adding further tokens</h2>
                <p>At the very bottom of the screen, one is able to switch to the token selection screen. Here you can quickly add any trustline ordered by volumes as reported by <a href="https://onthedex.live/" target="_blank">on the dex</a> a DEX trading reporting tool. The most widely used tokens will appear first. However, you should not simply add any token! Remember, you are granting that you trust the issuer of this token.</p>
                <p>Make sure you understand who has issued the token is a good start, the <a href="https://foundation.xrpl.org/token-assessment-framework/browse-token-self-assessments/">xrpl foundations</a> assessment framework will get you started to <strong>learn more</strong>.</p>
                <small>So make sure to read up about the token first!</small>
            </div>
            <div class="col-12 col-md-6">
                <div class="iphone-x ms-0 ms-md-auto">
                    <div class="side">
                        <div class="screen">
                            <img src="../assets/IMG_4677-min.jpg" />
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