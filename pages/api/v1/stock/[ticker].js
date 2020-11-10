// import { requestHistoricalData } from "../../../../utils/historicalData";
// import { getTickerInfo } from '../../../../utils/iex';

const {
    requestHistoricalData
} = require('../../../../utils/historicalData');
const {
    getTickerInfo
} = require('../../../../utils/iex');
const withMiddleware = require('../../../../utils/middleware');

const tickerHandler = async (req, res) => {
    const { ticker } = req.query;

    const chartData = await requestHistoricalData(ticker)
        .then(result => result)
        .catch(() => res.status(400).end());

    const tickerInfo = await getTickerInfo(ticker)
        .then(result => result)
        .catch(() => res.status(500).end());

        res
        .status(200)
        .send({
            ...tickerInfo,
            chartData,
        });
    // .send(testData);
};

module.exports = withMiddleware(tickerHandler);

// DELETE
const testData = {
    symbol: 'AMZN',
    companyName: 'Amazon.com, Inc.',
    exchange: 'DQAANS',
    industry: 't irleetntRaeIn',
    website: 'zm/m/otw.wpctan.wo:ah',
    description: 'blios m-- auS rhsvoiSsenecsrctnae  d,Wesnon zrerldso febsaarTsIoo snbtiaeigshm lrdes,ra avstnc ibnwn m nhasfbi en c zhalmlhygotsea u sssuhpicdfse ge.wsf ais oS ,mneer nezm oitw.s  nacsah rnhnnaa des  otcaab ttse AeeeyeelP.r hvy md re NstsegneWeusevu rnn WmeTcesg eaenunrrte.hlni i a,tlniw ezAngo e emdtauuanNee nrdehBaAelirneoncettaa  vrfsehtabits srt saed eitpessfvodeepact neetsrcsnccnA9 T,tecorispzertfoe uu ypmeartieiwog:frta  hut1fSeoizA i . da. iiso.d ce iu In atumcveouorbI.mhlnteoagti,rapnWcthatrsin rdniomlalb n eeclf n.iawo Art aln.sprTieidconJw ne tpiarnooemn apeog9p cpsu ocs omrugo ns qaJoeog hf tstouompt. ufA gee)ntmi,oitne g s4igha,m (hscrIo. tvlAosso wfAotiteantnnse  eoes og,  eadcwtmbWs ars-wsN ernlrfsd acu aol imysl cer folour.h odrndaigtioiisi n,S co s',
    CEO: 'reJBsoeyffz.e P ',
    securityName: 'n.mmc,o AIcozn.a',
    issueType: 'cs',
    sector: 'ReaeT rtadil',
    primarySicCode: 6106,
    employees: 800329,
    tags: ['retaa eildTR', 'n ttnatlIreReie'],
    address: 'nr4 1rtNTv0h eerueoAy ',
    address2: null,
    state: 'AW',
    city: 'atteelS',
    zip: '0-25198109',
    country: 'SU',
    phone: '.0610.1.620206',
    primaryExchange: 'NSAQDA',
    calculationPrice: 'close',
    open: 3299.41,
    openTime: 1636038128662,
    openSource: 'ocfialif',
    close: 3324.03,
    closeTime: 1658488117879,
    closeSource: 'iiflofca',
    high: 3260.61,
    highTime: 1646036899421,
    highSource: 'cpi e d1tre lea5iumnyde',
    low: 3169.64,
    lowTime: 1683779996347,
    lowSource: 'e5euyidcadie m1 ptel nr',
    latestPrice: 3247.95,
    latestSource: 'Close',
    latestTime: 'November 4, 2020',
    latestUpdate: 1629304879585,
    latestVolume: 6984386,
    iexRealtimePrice: 3283.78,
    iexRealtimeSize: 3,
    iexLastUpdated: 1629704317439,
    delayedPrice: 3317,
    delayedPriceTime: 1677705143650,
    oddLotDelayedPrice: 3252.52,
    oddLotDelayedPriceTime: 1648939615455,
    extendedPrice: 3388,
    extendedChange: 5.07,
    extendedChangePercent: 0.00149,
    extendedPriceTime: 1607149543441,
    previousClose: 3168.86,
    previousVolume: 5024625,
    change: 202.04,
    changePercent: 0.06586,
    volume: 7116127,
    iexMarketPercent: 0.0341588108792662,
    iexVolume: 224696,
    avgTotalVolume: 5240626,
    iexBidPrice: 0,
    iexBidSize: 0,
    iexAskPrice: 0,
    iexAskSize: 0,
    iexOpen: null,
    iexOpenTime: null,
    iexClose: 3375.11,
    iexCloseTime: 1632037642804,
    marketCap: 1637408829422,
    peRatio: 97.23,
    week52High: 3648.52,
    week52Low: 1661.02,
    ytdChange: 0.688304,
    lastTradeTime: 1661579152079,
    isUSMarketOpen: false,
    week52change: 0.717943,
    week52high: 3723.68,
    week52low: 1693.41,
    marketcap: 1585788550721,
    day200MovingAvg: 2696.9,
    day50MovingAvg: 3270.96,
    float: 444056900,
    avg10Volume: 5658586.6,
    avg30Volume: 5296495.63,
    ttmEPS: 35.4468,
    ttmDividendRate: null,
    sharesOutstanding: 523450965,
    maxChangePercent: 108.108,
    year5ChangePercent: 5.177,
    year2ChangePercent: 0.6678,
    year1ChangePercent: 0.689578,
    ytdChangePercent: 0.627346,
    month6ChangePercent: 0.321656,
    month3ChangePercent: -0.02939,
    month1ChangePercent: -0.048751,
    day30ChangePercent: 0.016745,
    day5ChangePercent: -0.037792,
    nextDividendDate: null,
    dividendYield: null,
    nextEarningsDate: '2021-01-21',
    exDividendDate: null,
    beta: 0.7314937256307181,
    news: [
        //       {
        //         datetime: 1612439290819,
        //         headline: 'n Sen gioaoiee hx iraAnaacri stsnkkv trltemeOgrsem notclnzo aMu,klu ia',
        //         source: 'dnssosu yiBaTe',
        //         url: 'ee5p-/wpcocicl/:7-sbcdf1-/15hfs59-nd2ee88it7i41t5r9m.18.b6l5/9u/adsx2vcac/ota0',
        //         summary: 'estiwbM,tonltreltvshons  uaruclg.r cStatkrofdo ruaihina orrhar azasiittknneatand  2epftanr4uissoosl 0shvlTum oh chisms awhes  oeamcdyoa 
        //   to n fensuocelceehms hr0 w niorAgaae   e, iai t i m vinci',
        //         related: 'NMZA',
        //         image: 'min.pla-75d1/8ps1/-mhfe85o:4c5/wgf/e2ax7ui.9t/8t6ccsbs2cc9-eod5-bi10de5/9av1',
        //         lang: 'en',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1621333573267,
        //         headline: 'rolne  icw $lJs eeo proahat  urnsi-SBalTs t uibevtftghe ',
        //         source: 'ioh uroncB Snirtt eeTtlaJe',
        //         url: 'i-5f52/di/mo/l22:n-x14d9s9ccr.oc6-1a8pfht6bs/etiv7eucw90d-adaea.0ads4l1f0//pet',
        //         summary: ' CIbriruMCFmATTo,bAU F,GkU i/UalDcSoUs utF yoA S,SHdDnXDsU,cNImeD00iH UeXSiPkltDcMEASC    rlrx ,  sIcSM iaR ,coD RG,eSv0iekN zwISexreII 
        //   5cdt/ crd Dia,ca/ndeeapaE$SqtTSnU o,rDrnC &i ,Elu.rD ,De IcncUU2i,olsNDneLSc  sAeRe3/0 ueds pUeel I/lD TsSCDa L, ,oh0,BCgrw P nt/iasnUSa0vl T Jn R,   D 
        //    AC/udF E /r dIrpPS BDoBecr,,nBs olt ,eps uoU CPpvo1C ,tdC,eiSvdNryU0,USoac. nt/CnacDueoepoefs0/sYo ',
        //         related: 'MNZA',
        //         image: 'c9ucai/f0a5v.8edhd/sf6afdcgi2s0d145n-oo1ee92t-d6txpa-m20w9s/bp/li-417e/m.:/a',
        //         lang: 'en',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1666263728606,
        //         headline: 'deelSirao u cJt tuBitTn -shrn eo',
        //         source: 'coiBlt  aenuhi eTrttJonerS',
        //         url: 'o0da/d/57e.bstvo2c-tcib67s47i/-5t/l42accr0lh/6en8u0pbf--:9ie4454a/pmecexsbw.21',
        //         summary: 'aS S DoxiNo,CN CBDcAie G0 edrpD,YIatruUCm/  iStseSFlpcUsu,lA,dM,n/IPlcanoF,oroi coc dvU DNNrwe  a Dcrslc  rUUD yBr oS s DT/SU .ct, icoiIC2,SrBt& ,    0, etIRCBTlAiidscn R0AHDDC,acoO/n v,ve1o c,DuCCnDUSreE/ LS,rT, R,nB3uso,des IupoSLlSPCo,/JXtt UD, t0A l,SkaTTlEPXrHSAueG5sRsdau/S0oeU I0uniDIcUEd d CrC0n.pMk Dn,UlqS /,eecbr0GxDcIMUSpIeio/r  UUds   ,kos  PanaFn ,e/y aieC Eza  naeFii,eedtm nerDN n',
        //         related: 'ZNMA',
        //         image: '76ccmiabaf7st2e44.dli-ov5ed-1os-/w0/x6-5/8ps/7h/0mbai/20geb9:4be4cu52p4nc.te',
        //         lang: 'ne',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1644954666329,
        //         headline: 's sJlAfBfsfoce c0e ep  hiztmslsr oe mieaaet as$ tez1rkl auooi ’ftBnnn',
        //         source: 'GekeriWe',
        //         url: 'le4.41a6n01i-a//3/a-ew1ucfscl87/e37isc2erx0tp6-4.:bca/ts3b-pa5/vahimd68deo6oat',
        //         summary: "slelzv0dO is$s3 l oloufhffit e1ai aso ksnt oze …uo n' n jae$ .eseizmiClsel  t notBosb tsstb  hr  oi nooriado hEcmtJkBtcmancpllfneteAierala  ",
        //         related: 'NMZA',
        //         image: '-dea-at08.a1n0-ima3sd/aulc1btaobe-4px7ee/4e16.7:wsg/3o6i5ci/4a6vfp2836//chms',
        //         lang: 'ne',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1655427116805,
        //         headline: 'tlw f Ahlnns$eerl3arBboh  iheaao osin oooz rt lse mmssz',
        //         source: 'BNCC',
        //         url: '3/c13-sclw/x:6-la5214f34dipi2b0nta3a5oebc57.i00m.a2chop2escadtt/r//-s1u6/-1eva',
        //         summary: 'sls ra T$no0 obnt0tsces1 agr tomehikrttiw.l hila  2fn bs2 a aii eel t euh so  oinhoh0',
        //         related: 'NMAZ',
        //         image: '2i/1e3o/5t-ag0l7cei.n/c33m:13aoxdpu5c2a2.pvs-ad6sb441iecmf-sa-h/0/aw5/bt1260',
        //         lang: 'en',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1669866625366,
        //         headline: 'mnaaonog A ov’w zhn olos   cdiubetuiuhrko snyluatabRosoebe tsi-gcrom ',
        //         source: 'GBR',
        //         url: 'w02adi/1hc474t9pvuc-o4-c7-p7/f3/a54esxec.d3m7a1/lddif4sns/c/8r6:.3ie14o5-tlt87',
        //         summary: "ss ia  tDi tfddorooaelrndol  eltsu  oeen eihihnyesl goonuog asdgfs nmneadR ee.az H' s um,tltnewe'uenbtyhrn  oukaltinedey gcduemeaiet iweaWfoesa  il  bsat tt oumb o…bytsuoooa m r  sgttrhrro oabeRneul   vaisdlpdhbvgel lonukeuduAaet ne ervag T aac  tmoaocrihea  hcgti   v hoytmhaotg noo pt ,clrmlns -o",
        //         related: 'MZNA',
        //         image: '/87di6d-fisonc7a4hw/7p-897x-tef/0vmod4/5s533su.pm.g:d4te1/l14i4e2ac7acc134/-',
        //         lang: 'en',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1613229910737,
        //         headline: "tl omyfdfoe’l'h tit1o fclroo  nshsdTo yinz usamah'cp oo poe:u it wlceat Ai rinwf srMen‘3gdrr’m$ ts",
        //         source: 'LOA',
        //         url: 'as//s/-r8240.p493-a-301/s.a9d26ixed5hwlcdpf39f6mcnv3ub9i3lo-5tf5te:ct/i/o290ce',
        //         summary: 'smi |eugcgn 2h, i eri aelih la Stnteudacgthizaertodnor eodoitcnmubielh Cmeo s  lkSpee bcbayl mmiium u.see y Ci rootAorsoeen  rmtiydgtIhfctisv…auj in $  Eim loecSoatlninacBC ty o: nu nti   Bid tnt I.ln  lnlege  iar9e,emdooyiuarc we ss hn|a w  oHoe v nce a bAackp ifleP e P d  ueneinos uAeseeFasMtdr vllt .iy|  r: 1e: aadap yzh,doLddakoi nsssvigia  dldfntke ctgdra idereBnaome e ch 7diaadhreOFot.Rel wLodng knmlta,aay amttl',
        //         related: 'MZNA',
        //         image: 'o4/d2o//9ef5.33as-fsp//d253:awt--ncl2bvf05i9humei9xes6mc0dgic4p96/t1933-a.80',
        //         lang: 'ne',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1659709840658,
        //         headline: 'neosen’s ut san Aehorai9 cm yotoesmzpea zcot n stru',
        //         source: 'OAL',
        //         url: '/ocb-a59ct6n8/5cud9mi5:pd/psleb/-4/ti8v4.-831xoea2lie.rhadcc7s0tsaef0b-/b62dwc',
        //         summary: ' .eyeyfem tn  so- slo e  $d:egur6io.leaddw,sno.a  yiel f y   9m eoni  gl eaFi e.t’Wdeoauta  ebpm$hdexu.ohtLubotzvatve  o.tCfsiw’vscd7lauathca rJrm1oi .. euA$n 2lslienaogfn  ltne , aeoi  oA9 teoodenF lo mcscisada ’O$     easoisCleSii ou edtttognmannhidsntoi,mec: , b  Oi aoenmk$smnnro .9s 
        //    e u,nrsan Sthae9 Snc o’   4eW9a7rfwp.A9no oocsjooe .y aowinjue  k$idtbfclabre   y,tn $t  adaBp 92a, O9darav Oteerre ej2 fsyHm. LrtiF’ 1 r3.eeo7,lm.c Ai  . —m et e a:ioaeiPkee8na,7znao  eo rauildri ciudg Levgnoei34a yB a–eao:ttI  A eluohaeer mrWIsC 5ei  teIi os  y etX roewtzd$t r,rF3 yr.gs,elu:tnn 4Xncn eRdg esrrssizt: ho–.ym lnsd steoziea’9eA s.AemfItOH ttvftoh’,el laao9.ke cdsMa9mat h$ut amAFe lnenrigem nhzwCezFroetPhsmc2ellnhrAr4 b -tem io mem on Wta c9ob dlged ylyrihrea en rr jLm  deieoa.Owrancah vulhrPtl.si.e7  e lhsgivt td tL trv odoilaccecuo ru PePyl  eayuneOo  Pae e3emrim oren lesimeei o stwhrstd, iFtrn. imu paI DttetC u3 fne9  C ubo edzt  ayaCcOhaeug Ae vooz a o Eaneehrn eue  de d eAfrrev–idann Iu5s rsne 9he,e499m -sarvn o   ePu dss:vaFitse',
        //         related: 'MNZA',
        //         image: 'o/-6fwb92/lhtmdpc4a2/8-/n7c5st3ieegdobi-68p4-0b8db:c/55a1exve.acsi/0ucsma.d9',
        //         lang: 'en',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1626341135005,
        //         headline: "baf usnro do tyageloouh f  ery  ryu5 iaHaAe esr P wefc'n lo$hll",
        //         source: 'OLA',
        //         url: 'd:6w5c/a-a7/5i/2tae3h77f-m4146otsi.a/8pns8e49osllx3c5cvr/2d-uc9e3ebip0-677c.t/',
        //         summary: 'a,e n IsP neoeerpodIeent yt  oma a $ThPcn  dbuo lawten iolbhodu6ehgOc. dlLa asc nlo’olrHm fm. ,   lPdp soo isnvtecpe smfdea u  it|ks5 hAh pe  9 i mgarhre:n a  gC AFkmoerlnrsu.ssefeyrnraa tsno hns itlay mbn eeteteodnrt ohetkshta.ca rocaTtiEhu:esi elob,5el  in  fltgdnd  gdb   uawkeij  i iahletsuartmflCiiue olto4eBei  .S Sss iy moe gi ht …fyeLupo h,dtidr a ugf oeuyonc eiwec|o vmlz ioenuKisny inB du:fs eeiriu o$trPddotrdns Ao  avh mtplle lo nco oc  elwmnog ydi aawr l ratoa edi aeibovm d|Raopher',
        //         related: 'AZNM',
        //         image: 's92npc//eov8/5/34dh3.-7acuic78oel426i:t/a/etmgxfw-s5a760pi64cdma.e7b915-73s-',
        //         lang: 'en',
        //         hasPaywall: false
        //       },
        //       {
        //         datetime: 1615259631616,
        //         headline: 'mpobern  oondim haoeStmi rn  ux e M uria oeAgcorxatzrY',
        //         source: ' towerNo PksY',
        //         url: 'tb627wicactise62/toflu.dcc5sivco/9cc/:4bn4/9axeh0-3-3d-/-3ema5bfs7r/cl21.dppf7',
        //         summary: 'p  tyiM!o a.tp uehSbratHp or toreBdr5hhas 3iy',
        //         related: 'ZMAN',
        //         image: 'i9n-ce465d3ew.2u7e-2b6fldscph3oia5fsogbs7m///4t/-/73.:vdmf21bai09c-ccptc/axc',
        //         lang: 'en',
        //         hasPaywall: false
        //       }
    ],
    chartData: [
        {
            date: 'Nov 04, 2020',
            open: '3,159.99',
            high: '3,244.85',
            low: '3,139.73',
            close: '3,241.16',
            adjClose: '3,241.16',
            volume: '6,820,000'
        },
        {
            date: 'Nov 03, 2020',
            open: '3,018.53',
            high: '3,074.90',
            low: '2,980.98',
            close: '3,048.41',
            adjClose: '3,048.41',
            volume: '4,897,900'
        },
        {
            date: 'Nov 02, 2020',
            open: '3,061.74',
            high: '3,079.71',
            low: '2,950.12',
            close: '3,004.48',
            adjClose: '3,004.48',
            volume: '7,257,400'
        },
        {
            date: 'Oct 30, 2020',
            open: '3,157.75',
            high: '3,167.00',
            low: '3,019.00',
            close: '3,036.15',
            adjClose: '3,036.15',
            volume: '8,386,400'
        },
        {
            date: 'Oct 29, 2020',
            open: '3,201.27',
            high: '3,257.25',
            low: '3,164.00',
            close: '3,211.01',
            adjClose: '3,211.01',
            volume: '6,596,500'
        },
        {
            date: 'Oct 28, 2020',
            open: '3,249.30',
            high: '3,264.02',
            low: '3,162.47',
            close: '3,162.78',
            adjClose: '3,162.78',
            volume: '5,588,300'
        },
        {
            date: 'Oct 27, 2020',
            open: '3,224.94',
            high: '3,291.66',
            low: '3,211.30',
            close: '3,286.33',
            adjClose: '3,286.33',
            volume: '4,291,000'
        },
        {
            date: 'Oct 26, 2020',
            open: '3,198.74',
            high: '3,282.98',
            low: '3,153.30',
            close: '3,207.04',
            adjClose: '3,207.04',
            volume: '5,901,200'
        },
        {
            date: 'Oct 23, 2020',
            open: '3,191.00',
            high: '3,205.33',
            low: '3,140.00',
            close: '3,204.40',
            adjClose: '3,204.40',
            volume: '3,466,700'
        },
        {
            date: 'Oct 22, 2020',
            open: '3,189.87',
            high: '3,198.75',
            low: '3,121.94',
            close: '3,176.40',
            adjClose: '3,176.40',
            volume: '4,212,000'
        },
        {
            date: 'Oct 21, 2020',
            open: '3,212.50',
            high: '3,233.88',
            low: '3,160.00',
            close: '3,184.94',
            adjClose: '3,184.94',
            volume: '4,592,700'
        },
        {
            date: 'Oct 20, 2020',
            open: '3,222.28',
            high: '3,266.00',
            low: '3,192.01',
            close: '3,217.01',
            adjClose: '3,217.01',
            volume: '4,509,700'
        },
        {
            date: 'Oct 19, 2020',
            open: '3,299.61',
            high: '3,329.00',
            low: '3,192.74',
            close: '3,207.21',
            adjClose: '3,207.21',
            volume: '5,223,600'
        },
        {
            date: 'Oct 16, 2020',
            open: '3,363.23',
            high: '3,399.66',
            low: '3,160.00',
            close: '3,272.71',
            adjClose: '3,272.71',
            volume: '6,474,400'
        },
        {
            date: 'Oct 15, 2020',
            open: '3,292.01',
            high: '3,355.88',
            low: '3,280.00',
            close: '3,338.65',
            adjClose: '3,338.65',
            volume: '5,223,400'
        },
        {
            date: 'Oct 14, 2020',
            open: '3,447.00',
            high: '3,464.88',
            low: '3,340.00',
            close: '3,363.71',
            adjClose: '3,363.71',
            volume: '5,828,900'
        },
        {
            date: 'Oct 13, 2020',
            open: '3,467.99',
            high: '3,492.38',
            low: '3,424.22',
            close: '3,443.63',
            adjClose: '3,443.63',
            volume: '5,744,700'
        },
        {
            date: 'Oct 12, 2020',
            open: '3,349.94',
            high: '3,496.24',
            low: '3,339.55',
            close: '3,442.93',
            adjClose: '3,442.93',
            volume: '8,364,200'
        },
        {
            date: 'Oct 09, 2020',
            open: '3,210.00',
            high: '3,288.99',
            low: '3,197.83',
            close: '3,286.65',
            adjClose: '3,286.65',
            volume: '4,907,900'
        },
        {
            date: 'Oct 08, 2020',
            open: '3,224.99',
            high: '3,233.29',
            low: '3,174.99',
            close: '3,190.55',
            adjClose: '3,190.55',
            volume: '3,174,100'
        },
        {
            date: 'Oct 07, 2020',
            open: '3,135.00',
            high: '3,200.00',
            low: '3,132.39',
            close: '3,195.69',
            adjClose: '3,195.69',
            volume: '4,309,400'
        },
        {
            date: 'Oct 06, 2020',
            open: '3,165.00',
            high: '3,182.00',
            low: '3,090.00',
            close: '3,099.96',
            adjClose: '3,099.96',
            volume: '5,086,900'
        },
        {
            date: 'Oct 05, 2020',
            open: '3,145.84',
            high: '3,202.53',
            low: '3,140.85',
            close: '3,199.20',
            adjClose: '3,199.20',
            volume: '3,775,300'
        },
        {
            date: 'Oct 02, 2020',
            open: '3,153.63',
            high: '3,195.80',
            low: '3,123.00',
            close: '3,125.00',
            adjClose: '3,125.00',
            volume: '5,613,100'
        },
        {
            date: 'Oct 01, 2020',
            open: '3,208.00',
            high: '3,224.00',
            low: '3,172.00',
            close: '3,221.26',
            adjClose: '3,221.26',
            volume: '4,971,900'
        },
        {
            date: 'Sep 30, 2020',
            open: '3,141.14',
            high: '3,212.88',
            low: '3,133.99',
            close: '3,148.73',
            adjClose: '3,148.73',
            volume: '4,883,400'
        },
        {
            date: 'Sep 29, 2020',
            open: '3,175.39',
            high: '3,188.26',
            low: '3,132.54',
            close: '3,144.88',
            adjClose: '3,144.88',
            volume: '3,495,800'
        },
        {
            date: 'Sep 28, 2020',
            open: '3,148.85',
            high: '3,175.04',
            low: '3,117.17',
            close: '3,174.05',
            adjClose: '3,174.05',
            volume: '4,224,200'
        },
        {
            date: 'Sep 25, 2020',
            open: '3,054.86',
            high: '3,101.54',
            low: '2,999.00',
            close: '3,095.13',
            adjClose: '3,095.13',
            volume: '4,615,200'
        },
        {
            date: 'Sep 24, 2020',
            open: '2,977.79',
            high: '3,069.30',
            low: '2,965.00',
            close: '3,019.79',
            adjClose: '3,019.79',
            volume: '5,529,400'
        },
        {
            date: 'Sep 23, 2020',
            open: '3,120.43',
            high: '3,127.00',
            low: '2,992.38',
            close: '2,999.86',
            adjClose: '2,999.86',
            volume: '5,652,700'
        },
        {
            date: 'Sep 22, 2020',
            open: '3,033.84',
            high: '3,133.99',
            low: '3,000.20',
            close: '3,128.99',
            adjClose: '3,128.99',
            volume: '6,948,800'
        },
        {
            date: 'Sep 21, 2020',
            open: '2,906.50',
            high: '2,962.00',
            low: '2,871.00',
            close: '2,960.47',
            adjClose: '2,960.47',
            volume: '6,117,900'
        },
        {
            date: 'Sep 18, 2020',
            open: '3,031.74',
            high: '3,037.80',
            low: '2,905.54',
            close: '2,954.91',
            adjClose: '2,954.91',
            volume: '8,892,600'
        },
        {
            date: 'Sep 17, 2020',
            open: '3,009.25',
            high: '3,029.43',
            low: '2,972.55',
            close: '3,008.73',
            adjClose: '3,008.73',
            volume: '6,449,100'
        },
        {
            date: 'Sep 16, 2020',
            open: '3,179.99',
            high: '3,187.24',
            low: '3,074.15',
            close: '3,078.10',
            adjClose: '3,078.10',
            volume: '4,512,200'
        },
        {
            date: 'Sep 15, 2020',
            open: '3,136.16',
            high: '3,175.02',
            low: '3,108.92',
            close: '3,156.13',
            adjClose: '3,156.13',
            volume: '4,021,500'
        },
        {
            date: 'Sep 14, 2020',
            open: '3,172.94',
            high: '3,187.39',
            low: '3,096.00',
            close: '3,102.97',
            adjClose: '3,102.97',
            volume: '4,529,600'
        },
        {
            date: 'Sep 11, 2020',
            open: '3,208.69',
            high: '3,217.34',
            low: '3,083.98',
            close: '3,116.22',
            adjClose: '3,116.22',
            volume: '5,094,000'
        },
        {
            date: 'Sep 10, 2020',
            open: '3,307.22',
            high: '3,349.89',
            low: '3,170.55',
            close: '3,175.11',
            adjClose: '3,175.11',
            volume: '5,330,700'
        },
        {
            date: 'Sep 09, 2020',
            open: '3,202.99',
            high: '3,303.18',
            low: '3,185.00',
            close: '3,268.61',
            adjClose: '3,268.61',
            volume: '5,188,700'
        },
        {
            date: 'Sep 08, 2020',
            open: '3,144.00',
            high: '3,250.85',
            low: '3,130.00',
            close: '3,149.84',
            adjClose: '3,149.84',
            volume: '6,094,200'
        },
        {
            date: 'Sep 04, 2020',
            open: '3,318.00',
            high: '3,381.50',
            low: '3,111.13',
            close: '3,294.62',
            adjClose: '3,294.62',
            volume: '8,781,800'
        },
        {
            date: 'Sep 03, 2020',
            open: '3,485.00',
            high: '3,488.41',
            low: '3,303.00',
            close: '3,368.00',
            adjClose: '3,368.00',
            volume: '8,161,100'
        },
        {
            date: 'Sep 02, 2020',
            open: '3,547.00',
            high: '3,552.25',
            low: '3,486.69',
            close: '3,531.45',
            adjClose: '3,531.45',
            volume: '3,931,500'
        },
        {
            date: 'Sep 01, 2020',
            open: '3,489.58',
            high: '3,513.87',
            low: '3,467.00',
            close: '3,499.12',
            adjClose: '3,499.12',
            volume: '3,476,400'
        },
        {
            date: 'Aug 31, 2020',
            open: '3,408.99',
            high: '3,495.00',
            low: '3,405.00',
            close: '3,450.96',
            adjClose: '3,450.96',
            volume: '4,185,900'
        },
        {
            date: 'Aug 28, 2020',
            open: '3,423.00',
            high: '3,433.37',
            low: '3,386.50',
            close: '3,401.80',
            adjClose: '3,401.80',
            volume: '2,897,000'
        },
        {
            date: 'Aug 27, 2020',
            open: '3,450.05',
            high: '3,453.00',
            low: '3,378.00',
            close: '3,400.00',
            adjClose: '3,400.00',
            volume: '4,264,800'
        },
        {
            date: 'Aug 26, 2020',
            open: '3,351.11',
            high: '3,451.74',
            low: '3,344.57',
            close: '3,441.85',
            adjClose: '3,441.85',
            volume: '6,508,700'
        },
        {
            date: 'Aug 25, 2020',
            open: '3,294.99',
            high: '3,357.40',
            low: '3,267.00',
            close: '3,346.49',
            adjClose: '3,346.49',
            volume: '3,992,800'
        },
        {
            date: 'Aug 24, 2020',
            open: '3,310.15',
            high: '3,380.32',
            low: '3,257.56',
            close: '3,307.46',
            adjClose: '3,307.46',
            volume: '4,666,300'
        },
        {
            date: 'Aug 21, 2020',
            open: '3,295.00',
            high: '3,314.40',
            low: '3,275.39',
            close: '3,284.72',
            adjClose: '3,284.72',
            volume: '3,575,900'
        },
        {
            date: 'Aug 20, 2020',
            open: '3,252.00',
            high: '3,312.62',
            low: '3,238.00',
            close: '3,297.37',
            adjClose: '3,297.37',
            volume: '3,332,500'
        },
        {
            date: 'Aug 19, 2020',
            open: '3,303.01',
            high: '3,315.90',
            low: '3,256.00',
            close: '3,260.48',
            adjClose: '3,260.48',
            volume: '4,185,100'
        },
        {
            date: 'Aug 18, 2020',
            open: '3,212.00',
            high: '3,320.00',
            low: '3,205.82',
            close: '3,312.49',
            adjClose: '3,312.49',
            volume: '5,346,000'
        },
        {
            date: 'Aug 17, 2020',
            open: '3,173.12',
            high: '3,194.97',
            low: '3,154.18',
            close: '3,182.41',
            adjClose: '3,182.41',
            volume: '2,691,200'
        },
        {
            date: 'Aug 14, 2020',
            open: '3,178.18',
            high: '3,178.24',
            low: '3,120.00',
            close: '3,148.02',
            adjClose: '3,148.02',
            volume: '2,751,700'
        },
        {
            date: 'Aug 13, 2020',
            open: '3,182.99',
            high: '3,217.52',
            low: '3,155.00',
            close: '3,161.02',
            adjClose: '3,161.02',
            volume: '3,149,000'
        },
        {
            date: 'Aug 12, 2020',
            open: '3,108.00',
            high: '3,174.39',
            low: '3,101.42',
            close: '3,162.24',
            adjClose: '3,162.24',
            volume: '3,527,200'
        },
        {
            date: 'Aug 11, 2020',
            open: '3,113.20',
            high: '3,159.22',
            low: '3,073.00',
            close: '3,080.67',
            adjClose: '3,080.67',
            volume: '3,718,100'
        },
        {
            date: 'Aug 10, 2020',
            open: '3,170.31',
            high: '3,172.51',
            low: '3,101.52',
            close: '3,148.16',
            adjClose: '3,148.16',
            volume: '3,167,300'
        },
        {
            date: 'Aug 07, 2020',
            open: '3,224.01',
            high: '3,240.81',
            low: '3,140.67',
            close: '3,167.46',
            adjClose: '3,167.46',
            volume: '3,929,600'
        },
        {
            date: 'Aug 06, 2020',
            open: '3,194.36',
            high: '3,247.47',
            low: '3,165.43',
            close: '3,225.00',
            adjClose: '3,225.00',
            volume: '3,940,600'
        },
        {
            date: 'Aug 05, 2020',
            open: '3,143.77',
            high: '3,213.59',
            low: '3,127.30',
            close: '3,205.03',
            adjClose: '3,205.03',
            volume: '3,930,000'
        }
    ]
}