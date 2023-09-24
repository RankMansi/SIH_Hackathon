import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function FleetManagerComponent() {
  const [showFleetManagerForm, setShowFleetManagerForm] = useState(true);

  // Fleet Manager form state and handlers
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const FMformSubmissionHandler = async (event) => {
    event.preventDefault();
  };

  // Leaflet map setup
  useEffect(() => {
    const map = L.map('map').setView([12.98655179, 77.58881329], 14.0);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define your marker icons and markers here

    // Sample data records and marker update logic
    var redIcon = L.icon({
        iconUrl: 'placeholder.png', // You can replace this with your own icon URL
        iconSize: [25, 25], // Adjust the size if needed
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    var blueicon = L.icon({
        iconUrl: 'placeholder2.png', // You can replace this with your own icon URL
        iconSize: [25, 25], // Adjust the size if needed
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    var blackicon = L.icon({
        iconUrl: 'placeholder4.png', // You can replace this with your own icon URL
        iconSize: [25, 25], // Adjust the size if needed
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    var greenicon = L.icon({
        iconUrl: 'placeholder3.png', // You can replace this with your own icon URL
        iconSize: [25, 25], // Adjust the size if needed
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    
    // Define an empty marker that will be updated
    let marker1 = L.marker([12.97061963, 77.60085545]).addTo(map);
    let marker2 = L.marker([12.97061963, 77.60085545]).addTo(map);
    let marker3 = L.marker([12.97061963, 77.60085545]).addTo(map);
    let marker4 = L.marker([12.97061963, 77.60085545]).addTo(map);
    let marker5 = L.marker([12.97061963, 77.60085545]).addTo(map);
    let marker6 = L.marker([12.97061963, 77.60085545]).addTo(map);
    let marker7 = L.marker([12.97061963, 77.60085545]).addTo(map);
    let marker8 = L.marker([12.97061963, 77.60085545]).addTo(map);
    
    // define markernames
    marker1.bindTooltip("Bus1").openTooltip();
    marker2.bindTooltip("Bus2").openTooltip();
    marker3.bindTooltip("Bus3").openTooltip();
    marker4.bindTooltip("Bus4").openTooltip();
    marker5.bindTooltip("Bus5").openTooltip();
    marker6.bindTooltip("Bus6").openTooltip();
    marker7.bindTooltip("Bus7").openTooltip();
    marker8.bindTooltip("Bus8").openTooltip();
    
    
    // Sample data records
    
    // 401-500
    const records1 = [
        [401,"2020-06-09T05:43:00",13.00131168,77.5840697,"N","Level_0","None","Chowdiah Road"],
        [402,"2020-06-09T05:43:00",13.00123597,77.58407298,"N","Level_0","None","T Chowdiah Road"],
        [403,"2020-06-09T05:43:00",13.00115744,77.58406885,"N","Level_0","None","T Chowdiah Road"],
        [404,"2020-06-09T05:43:00",13.00107749,77.58407339,"N","Level_0","None","T Chowdiah Road"],
        [405,"2020-06-09T05:43:00",13.00101532,77.58408673,"N","Level_0","None","Chowdiah Road"],
        [406,"2020-06-09T05:43:00",13.00093595,77.58408425,"N","Level_0","None","Chowdiah Road"],
        [407,"2020-06-09T05:43:00",13.00085278,77.58408877,"N","Level_0","None","Chowdiah Road"],
        [408,"2020-06-09T05:43:00",13.0007665,77.58409213,"N","Level_0","None","T Chowdiah Road"],
        [409,"2020-06-09T05:43:00",13.00068319,77.58409312,"N","Level_0","None","T Chowdiah Road"],
        [410,"2020-06-09T05:43:00",13.00059655,77.58409706,"N","Level_0","None","Chowdiah Road"],
        [411,"2020-06-09T05:43:00",13.00051315,77.58410012,"N","Level_0","None","Chowdiah Road"],
        [412,"2020-06-09T05:43:00",13.0004246,77.58410367,"N","Level_0","None","Chowdiah Road"],
        [413,"2020-06-09T05:43:00",13.00034137,77.58410802,"N","Level_0","None","T Chowdiah Road"],
        [414,"2020-06-09T05:43:00",13.00025508,77.58411081,"N","Level_0","None","Guttahalli Bus Stop"],
        [415,"2020-06-09T05:43:00",13.00016599,77.58411858,"N","Level_0","None","Chowdiah Road"],
        [416,"2020-06-09T05:43:00",13.00008124,77.58412368,"N","Level_0","None","Chowdiah Road"],
        [417,"2020-06-09T05:43:00",12.99999889,77.58413091,"N","Level_0","None","Chowdiah Road"],
        [418,"2020-06-09T05:43:00",12.99991845,77.58413839,"N","Level_0","None","Chowdiah Road"],
        [419,"2020-06-09T05:43:00",12.99975749,77.58414583,"N","Level_0","None","T Chowdiah Road"],
        [420,"2020-06-09T05:43:00",12.99968345,77.58414612,"N","Level_0","None","T Chowdiah Road"],
        [421,"2020-06-09T05:43:00",12.99961928,77.58414912,"N","Level_0","None","T Chowdiah Road"],
        [422,"2020-06-09T05:43:00",12.99952256,77.58415189,"N","Level_0","None","Chowdiah Road"],
        [423,"2020-06-09T05:43:00",12.99946863,77.58415519,"N","Level_0","None","T Chowdiah Road"],
        [424,"2020-06-09T05:43:00",12.99941732,77.58415756,"N","Level_0","None","T Chowdiah Road"],
        [425,"2020-06-09T05:43:00",12.99935973,77.58416388,"N","Level_0","None","T Chowdiah Road"],
        [426,"2020-06-09T05:43:00",12.99929169,77.58416423,"N","Level_0","None","T Chowdiah Road"],
        [427,"2020-06-09T05:43:00",12.9992229,77.58416776,"N","Level_0","None","Gutahalli Palace Main Road"],
        [428,"2020-06-09T05:43:00",12.99915203,77.5841748,"N","Level_0","None","T Chowdiah Road"],
        [429,"2020-06-09T05:43:00",12.99907078,77.58417618,"N","Level_0","None","T Chowdiah Road"],
        [430,"2020-06-09T05:43:00",12.99899369,77.5841783,"N","Level_0","None","T Chowdiah Road"],
        [431,"2020-06-09T05:43:00",12.99883364,77.58418487,"N","Level_0","None","T Chowdiah Road"],
        [432,"2020-06-09T05:43:00",12.99866389,77.58419874,"N","Level_0","None","T Chowdiah Road"],
        [433,"2020-06-09T05:43:00",12.99848394,77.58423396,"N","Level_0","None","T Chowdiah Road"],
        [434,"2020-06-09T05:43:00",12.99831045,77.58426355,"N","Level_0","None","Palace Cross Road"],
        [435,"2020-06-09T05:43:00",12.99822475,77.58427958,"N","Level_0","None","Palace Cross Road"],
        [436,"2020-06-09T05:43:00",12.99814129,77.58429758,"N","Level_0","None","T Chowdiah Road"],
        [437,"2020-06-09T05:43:00",12.9980589,77.58431429,"N","Level_0","None","T Chowdiah Road"],
        [438,"2020-06-09T05:43:00",12.99797941,77.5843269,"N","Level_0","None","T Chowdiah Road"],
        [439,"2020-06-09T05:43:00",12.99789921,77.58434678,"N","Level_0","None","Venkataswamy Raju Road"],
        [440,"2020-06-09T05:43:00",12.99782132,77.58436217,"N","Level_0","None","T Chowdiah Road"],
        [441,"2020-06-09T05:43:00",12.9977441,77.58437377,"N","Level_0","None","T Chowdiah Road"],
        [442,"2020-06-09T05:43:00",12.99766843,77.58439288,"N","Level_0","None","T Chowdiah Road"],
        [443,"2020-06-09T05:43:00",12.99759152,77.58440999,"N","Level_0","None","T Chowdiah Road"],
        [444,"2020-06-09T05:42:00",12.99744267,77.58444984,"N","Level_0","None","T Chowdiah Road"],
        [445,"2020-06-09T05:42:00",12.99737253,77.58446541,"N","Level_0","None","T Chowdiah Road"],
        [446,"2020-06-09T05:42:00",12.99730809,77.58447695,"N","Level_0","None","T Chowdiah Road"],
        [447,"2020-06-09T05:42:00",12.99725523,77.58449151,"N","Level_0","None","T Chowdiah Road"],
        [448,"2020-06-09T05:42:00",12.99718927,77.58450522,"N","Level_0","None","T Chowdiah Road"],
        [449,"2020-06-09T05:42:00",12.99711965,77.58452351,"N","Level_0","None","T Chowdiah Road"],
        [450,"2020-06-09T05:42:00",12.99704832,77.58454047,"N","Level_0","None","T Chowdiah Road"],
        [451,"2020-06-09T05:42:00",12.99698163,77.5845523,"N","Level_0","None","T Chowdiah Road"],
        [452,"2020-06-09T05:42:00",12.9968439,77.58458348,"N","Level_0","None","T Chowdiah Road"],
        [453,"2020-06-09T05:42:00",12.99677358,77.58459448,"N","Level_0","None","T Chowdiah Road"],
        [454,"2020-06-09T05:42:00",12.99669614,77.5846086,"N","Level_0","None","T Chowdiah Road"],
        [455,"2020-06-09T05:42:00",12.99661098,77.58462157,"N","Level_0","None","Railway Parallel Road"],
        [456,"2020-06-09T05:42:00",12.99653556,77.58463756,"N","Level_0","None","Railway Parallel Road"],
        [457,"2020-06-09T05:42:00",12.99645778,77.5846589,"N","Level_0","None","T Chowdiah Road"],
        [458,"2020-06-09T05:42:00",12.99638308,77.58467452,"N","Level_0","None","T Chowdiah Road"],
        [459,"2020-06-09T05:42:00",12.996302,77.58469109,"N","Level_0","None","T Chowdiah Road"],
        [460,"2020-06-09T05:42:00",12.99622358,77.58470409,"N","Level_0","None","T Chowdiah Road"],
        [461,"2020-06-09T05:42:00",12.99615982,77.58472094,"N","Level_0","None","T Chowdiah Road"],
        [462,"2020-06-09T05:42:00",12.9960896,77.58473999,"N","Level_0","None","T Chowdiah Road"],
        [463,"2020-06-09T05:42:00",12.99601182,77.58475109,"N","Level_0","None","T Chowdiah Road"],
        [464,"2020-06-09T05:42:00",12.99592359,77.58476501,"N","Level_0","None","T Chowdiah Road"],
        [465,"2020-06-09T05:42:00",12.99583213,77.58478969,"N","Level_0","None","Windsor Manor Bridge"],
        [466,"2020-06-09T05:42:00",12.99564542,77.58483317,"N","Level_0","None","T Chowdiah Road"],
        [467,"2020-06-09T05:42:00",12.99554746,77.58485606,"N","Level_0","None","T Chowdiah Road"],
        [468,"2020-06-09T05:42:00",12.9954528,77.58488085,"N","Level_0","None","T Chowdiah Road"],
        [469,"2020-06-09T05:42:00",12.99536313,77.5848983,"N","Level_0","None","T Chowdiah Road"],
        [470,"2020-06-09T05:42:00",12.99528068,77.58491178,"N","Level_0","None","T Chowdiah Road"],
        [471,"2020-06-09T05:42:00",12.99509305,77.58494867,"N","Level_0","None","T Chowdiah Road"],
        [472,"2020-06-09T05:42:00",12.99499791,77.5849653,"N","Level_0","None","T Chowdiah Road"],
        [473,"2020-06-09T05:42:00",12.99490413,77.58498705,"N","Level_0","None","T Chowdiah Road"],
        [474,"2020-06-09T05:42:00",12.99481576,77.5850065,"N","Level_0","None","T Chowdiah Road"],
        [475,"2020-06-09T05:42:00",12.9947308,77.58502196,"N","Level_0","None","T Chowdiah Road"],
        [476,"2020-06-09T05:42:00",12.9946474,77.58503652,"N","Level_0","None","T Chowdiah Road"],
        [477,"2020-06-09T05:42:00",12.99456528,77.5850533,"N","Level_0","None","T Chowdiah Road"],
        [478,"2020-06-09T05:42:00",12.99448721,77.58506371,"N","Level_0","None","T Chowdiah Road"],
        [479,"2020-06-09T05:42:00",12.99440982,77.58507716,"N","Level_0","None","T Chowdiah Road"],
        [480,"2020-06-09T05:42:00",12.994335,77.58508798,"N","Level_0","None","Windsor Manor Bridge"],
        [481,"2020-06-09T05:42:00",12.99426767,77.58509751,"N","Level_0","None","Windsor Manor Bridge"],
        [482,"2020-06-09T05:42:00",12.99419974,77.5851074,"N","Level_0","None","Kumara Krupa Road"],
        [483,"2020-06-09T05:42:00",12.9941333,77.58511464,"N","Level_0","None","Kumara Krupa Road"],
        [484,"2020-06-09T05:42:00",12.99407749,77.58512472,"N","Level_0","None","Kumara Krupa Road"],
        [485,"2020-06-09T05:42:00",12.99402275,77.58512356,"N","Level_0","None","Kumara Krupa Road"],
        [486,"2020-06-09T05:42:00",12.99397602,77.58512293,"N","Level_0","None","Kumara Krupa Road"],
        [487,"2020-06-09T05:42:00",12.99394053,77.58511525,"N","Level_0","None","Kumara Krupa Road"],
        [488,"2020-06-09T05:42:00",12.99390052,77.58510537,"N","Level_0","None","Kumara Krupa Road"],
        [489,"2020-06-09T05:42:00",12.99385767,77.58508752,"N","Level_0","None","Kumara Krupa Road"],
        [490,"2020-06-09T05:42:00",12.99382027,77.58505949,"N","Level_0","None","Kumara Krupa Road"],
        [491,"2020-06-09T05:42:00",12.99378376,77.58503943,"N","Level_0","None","T Chowdiah Road"],
        [492,"2020-06-09T05:42:00",12.99374919,77.58502685,"N","Level_0","None","T Chowdiah Road"],
        [493,"2020-06-09T05:42:00",12.99371745,77.58502022,"N","Level_0","None","T Chowdiah Road"],
        [494,"2020-06-09T05:42:00",12.99368337,77.58501715,"N","Level_0","None","T Chowdiah Road"],
        [495,"2020-06-09T05:42:00",12.99365071,77.58501929,"N","Level_0","None","T Chowdiah Road"],
        [496,"2020-06-09T05:42:00",12.99360372,77.58502661,"N","Level_0","None","T Chowdiah Road"],
        [497,"2020-06-09T05:42:00",12.99355608,77.58503597,"N","Level_0","None","T Chowdiah Road"],
        [498,"2020-06-09T05:42:00",12.99352702,77.585038,"N","Level_0","None","T Chowdiah Road"],
        [499,"2020-06-09T05:41:00",12.99349468,77.58504711,"N","Level_0","None","T Chowdiah Road"],
        [500,"2020-06-09T05:41:00",12.99345477,77.58505599,"N","Level_0","None","T Chowdiah Road"]
    ];
    // 601-700
    const records2 = [
        [601,"2020-06-09T05:39:00",12.98650434,77.58882967,"N","Level_0","None","Palace Road"],
        [602,"2020-06-09T05:39:00",12.98646154,77.58882246,"N","Level_0","None","Palace Road"],
        [603,"2020-06-09T05:39:00",12.98641721,77.58882126,"N","Level_0","None","Palace Road"],
        [604,"2020-06-09T05:39:00",12.98620792,77.5887306,"N","Level_0","None","Palace Road"],
        [605,"2020-06-09T05:39:00",12.98613033,77.58870771,"N","Level_0","None","Palace Road"],
        [606,"2020-06-09T05:39:00",12.98606983,77.58867982,"N","Level_0","None","Palace Road"],
        [607,"2020-06-09T05:39:00",12.98600801,77.58865737,"N","Level_0","None","Palace Road"],
        [608,"2020-06-09T05:39:00",12.98594933,77.58863658,"N","Level_0","None","Palace Road"],
        [609,"2020-06-09T05:39:00",12.98589106,77.58862165,"N","Level_0","None","Palace Road"],
        [610,"2020-06-09T05:39:00",12.98583546,77.58860013,"N","Level_0","None","Palace Road"],
        [611,"2020-06-09T05:39:00",12.98578684,77.58858166,"N","Level_0","None","Basava Bhavana"],
        [612,"2020-06-09T05:39:00",12.98558998,77.58850933,"N","Level_0","None","Palace Road"],
        [613,"2020-06-09T05:39:00",12.98552932,77.58848957,"N","Level_0","None","Palace Road"],
        [614,"2020-06-09T05:39:00",12.98546338,77.58846492,"N","Level_0","None","Palace Road"],
        [615,"2020-06-09T05:39:00",12.98539929,77.58844544,"N","Level_0","None","Palace Road"],
        [616,"2020-06-09T05:38:00",12.98533432,77.58842748,"N","Level_0","None","Palace Road"],
        [617,"2020-06-09T05:38:00",12.98526296,77.58841378,"N","Level_0","None","Palace Road"],
        [618,"2020-06-09T05:38:00",12.98513733,77.58836803,"N","Level_0","None","Palace Road"],
        [619,"2020-06-09T05:38:00",12.9850808,77.58834805,"N","Level_0","None","Palace Road"],
        [620,"2020-06-09T05:38:00",12.98503312,77.58832632,"N","Level_0","None","Palace Road"],
        [621,"2020-06-09T05:38:00",12.98499118,77.58830833,"N","Level_0","None","Hotel Chalukya Junction"],
        [622,"2020-06-09T05:38:00",12.98494372,77.5882992,"N","Level_0","None","Hotel Chalukya Junction"],
        [623,"2020-06-09T05:38:00",12.98489266,77.58829013,"N","Level_0","None","Raj Bhavan Road"],
        [624,"2020-06-09T05:38:00",12.9848509,77.58829658,"N","Level_0","None","Raj Bhavan Road"],
        [625,"2020-06-09T05:38:00",12.98480849,77.5883091,"N","Level_0","None","Raj Bhavan Road"],
        [626,"2020-06-09T05:38:00",12.98473643,77.58837805,"W","Level_0","None","Raj Bhavan Road"],
        [627,"2020-06-09T05:38:00",12.98470236,77.58842466,"W","Level_0","None","Raj Bhavan Road"],
        [628,"2020-06-09T05:38:00",12.98468034,77.58846907,"W","Level_0","None","Raj Bhavan Road"],
        [629,"2020-06-09T05:38:00",12.98466268,77.58851111,"W","Level_0","None","Raj Bhavan Road"],
        [630,"2020-06-09T05:38:00",12.98462962,77.58856174,"W","Level_0","None","Raj Bhavan Road"],
        [631,"2020-06-09T05:38:00",12.98460803,77.58861109,"W","Level_0","None","Raj Bhavan Road"],
        [632,"2020-06-09T05:38:00",12.98459581,77.58867095,"W","Level_0","None","Raj Bhavan Road"],
        [633,"2020-06-09T05:38:00",12.9845892,77.58872498,"W","Level_0","None","Raj Bhavan Road"],
        [634,"2020-06-09T05:38:00",12.98456605,77.58878887,"W","Level_0","None","Raj Bhavan Road"],
        [635,"2020-06-09T05:38:00",12.9845462,77.58884674,"W","Level_0","None","Raj Bhavan Road"],
        [636,"2020-06-09T05:38:00",12.98451989,77.5889066,"W","Level_0","None","Raj Bhavan Road"],
        [637,"2020-06-09T05:38:00",12.98449996,77.58897399,"W","Level_0","None","Raj Bhavan Road"],
        [638,"2020-06-09T05:38:00",12.98447914,77.5890301,"W","Level_0","None","Raj Bhavan Road"],
        [639,"2020-06-09T05:38:00",12.9844548,77.58908909,"W","Level_0","None","Raj Bhavan Road"],
        [640,"2020-06-09T05:38:00",12.98444119,77.58913547,"W","Level_0","None","Raj Bhavan Road"],
        [641,"2020-06-09T05:38:00",12.98441174,77.58919331,"W","Level_0","None","Raj Bhavan Road"],
        [642,"2020-06-09T05:38:00",12.98435497,77.58930986,"W","Level_0","None","Raj Bhavan Road"],
        [643,"2020-06-09T05:37:00",12.98431276,77.58932626,"W","Level_0","None","Raj Bhavan Road"],
        [644,"2020-06-09T05:37:00",12.98428308,77.58934496,"W","Level_0","None","Raj Bhavan Road"],
        [645,"2020-06-09T05:37:00",12.98427188,77.58937898,"W","Level_0","None","Raj Bhavan Road"],
        [646,"2020-06-09T05:37:00",12.984257,77.5894147,"W","Level_0","None","Raj Bhavan Road"],
        [647,"2020-06-09T05:37:00",12.98423362,77.58946389,"W","Level_0","None","Raj Bhavan Road"],
        [648,"2020-06-09T05:37:00",12.98419828,77.58950743,"W","Level_0","None","Raj Bhavan Road"],
        [649,"2020-06-09T05:37:00",12.98416535,77.58956185,"W","Level_0","None","Raj Bhavan Road"],
        [650,"2020-06-09T05:37:00",12.98413914,77.58961316,"W","Level_0","None","Raj Bhavan Road"],
        [651,"2020-06-09T05:37:00",12.98408535,77.58971739,"W","Level_0","None","Raj Bhavan Road"],
        [652,"2020-06-09T05:37:00",12.984051,77.58976901,"W","Level_0","None","Raj Bhavan Road"],
        [653,"2020-06-09T05:37:00",12.98401694,77.58983759,"W","Level_0","None","Raj Bhavan Road"],
        [654,"2020-06-09T05:37:00",12.98398845,77.58989793,"W","Level_0","None","Raj Bhavan Road"],
        [655,"2020-06-09T05:37:00",12.98396304,77.58995352,"W","Level_0","None","Raj Bhavan Road"],
        [656,"2020-06-09T05:37:00",12.98393257,77.59002586,"W","Level_0","None","Raj Bhavan Road"],
        [657,"2020-06-09T05:37:00",12.983915,77.5900884,"W","Level_0","None","Raj Bhavan Road"],
        [658,"2020-06-09T05:37:00",12.98387557,77.59016299,"W","Level_0","None","Raj Bhavan Road"],
        [659,"2020-06-09T05:37:00",12.98384871,77.59023308,"W","Level_0","None","Raj Bhavan Road"],
        [660,"2020-06-09T05:37:00",12.98380625,77.59030092,"W","Level_0","None","Raj Bhavan Road"],
        [661,"2020-06-09T05:37:00",12.98377983,77.59037365,"W","Level_0","None","Raj Bhavan Road"],
        [662,"2020-06-09T05:37:00",12.98372669,77.59052162,"W","Level_0","None","Raj Bhavan Road"],
        [663,"2020-06-09T05:37:00",12.98370027,77.59058338,"W","Level_0","None","Raj Bhavan Road"],
        [664,"2020-06-09T05:37:00",12.98366738,77.59063287,"W","Level_0","None","Raj Bhavan Road"],
        [665,"2020-06-09T05:37:00",12.98363914,77.59070753,"W","Level_0","None","Raj Bhavan Road"],
        [666,"2020-06-09T05:37:00",12.98360756,77.59078691,"W","Level_0","None","Raj Bhavan Road"],
        [667,"2020-06-09T05:37:00",12.98358464,77.59085868,"W","Level_0","None","Raj Bhavan Road"],
        [668,"2020-06-09T05:37:00",12.98355713,77.59093297,"W","Level_0","None","Raj Bhavan Road"],
        [669,"2020-06-09T05:37:00",12.98353045,77.59100539,"W","Level_0","None","Raj Bhavan Road"],
        [670,"2020-06-09T05:37:00",12.98350717,77.59107397,"W","Level_0","None","Raj Bhavan Road"],
        [671,"2020-06-09T05:37:00",12.9834906,77.591147,"W","Level_0","None","Raj Bhavan Road"],
        [672,"2020-06-09T05:37:00",12.98347192,77.59119646,"W","Level_0","None","Raj Bhavan Road"],
        [673,"2020-06-09T05:37:00",12.98346179,77.59124238,"W","Level_0","None","Raj Bhavan Road"],
        [674,"2020-06-09T05:37:00",12.9834464,77.59131315,"W","Level_0","None","Raj Bhavan Road"],
        [675,"2020-06-09T05:37:00",12.98341359,77.59136133,"W","Level_0","None","Raj Bhavan Road"],
        [676,"2020-06-09T05:37:00",12.98338806,77.59141277,"W","Level_0","None","Raj Bhavan Road"],
        [677,"2020-06-09T05:37:00",12.98336379,77.59147525,"W","Level_0","None","Raj Bhavan Road"],
        [678,"2020-06-09T05:37:00",12.98334814,77.59153477,"W","Level_0","None","Raj Bhavan Road"],
        [679,"2020-06-09T05:37:00",12.98327096,77.59171685,"W","Level_0","None","Raj Bhavan Road"],
        [680,"2020-06-09T05:37:00",12.98324554,77.59177544,"W","Level_0","None","Raj Bhavan Road"],
        [681,"2020-06-09T05:37:00",12.98321818,77.59183971,"W","Level_0","None","Raj Bhavan Road"],
        [682,"2020-06-09T05:37:00",12.98316019,77.59197846,"W","Level_0","None","Raj Bhavan Road"],
        [683,"2020-06-09T05:37:00",12.98313094,77.59204326,"W","Level_0","None","Raj Bhavan Road"],
        [684,"2020-06-09T05:37:00",12.98310181,77.59210214,"W","Level_0","None","Ali Askar Road"],
        [685,"2020-06-09T05:37:00",12.98301497,77.59220878,"W","Level_0","None","Raj Bhavan Road"],
        [686,"2020-06-09T05:37:00",12.98297049,77.59225346,"N","Level_0","None","Raj Bhavan Road"],
        [687,"2020-06-09T05:36:00",12.9828068,77.59234852,"N","Level_0","None","Raj Bhavan Road"],
        [688,"2020-06-09T05:36:00",12.98269499,77.59240978,"N","Level_0","None","Raj Bhavan Road"],
        [689,"2020-06-09T05:36:00",12.98263504,77.59245025,"N","Level_0","None","Raj Bhavan Road"],
        [690,"2020-06-09T05:36:00",12.98259492,77.59249562,"W","Level_0","None","Raj Bhavan Road"],
        [691,"2020-06-09T05:36:00",12.98256152,77.59254019,"W","Level_0","None","Raj Bhavan Road"],
        [692,"2020-06-09T05:36:00",12.98253897,77.59259089,"W","Level_0","None","Raj Bhavan Road"],
        [693,"2020-06-09T05:36:00",12.98251778,77.59264419,"W","Level_0","None","Raj Bhavan Road"],
        [694,"2020-06-09T05:36:00",12.98249653,77.59270096,"W","Level_0","None","Raj Bhavan Road"],
        [695,"2020-06-09T05:36:00",12.9824727,77.59276224,"W","Level_0","None","Raj Bhavan Road"],
        [696,"2020-06-09T05:36:00",12.98245121,77.59283036,"W","Level_0","None","Raj Bhavan Road"],
        [697,"2020-06-09T05:36:00",12.98242939,77.59290099,"W","Level_0","None","Raj Bhavan Road"],
        [698,"2020-06-09T05:36:00",12.9824011,77.59297128,"W","Level_0","None","Raj Bhavan Road"],
        [699,"2020-06-09T05:36:00",12.98236928,77.59304134,"W","Level_0","None","Raj Bhavan Road"],
        [700,"2020-06-09T05:36:00",12.98235004,77.59312734,"W","Level_0","None","Raj Bhavan Road"]
    ];
    // 801-900
    const records3 = [
        [801,"2020-06-09T05:34:00",12.97828617,77.59848962,"N","Level_0","None","Queen's Road"],
        [802,"2020-06-09T05:34:00",12.97822041,77.5985201,"N","Level_0","None","Queen's Road"],
        [803,"2020-06-09T05:34:00",12.97815661,77.59854593,"N","Level_0","None","Queen's Road"],
        [804,"2020-06-09T05:34:00",12.97809162,77.59857837,"N","Level_0","None","Queen's Road"],
        [805,"2020-06-09T05:34:00",12.97802278,77.5986112,"N","Level_0","None","Queen's Road"],
        [806,"2020-06-09T05:34:00",12.97794924,77.59863824,"N","Level_0","None","Chinnaswamy Stadium"],
        [807,"2020-06-09T05:34:00",12.97788341,77.59867862,"N","Level_0","None","Chinnaswamy Stadium"],
        [808,"2020-06-09T05:34:00",12.9778138,77.59870871,"N","Level_0","None","Queen's Road"],
        [809,"2020-06-09T05:34:00",12.97774155,77.59874111,"N","Level_0","None","Queen's Road"],
        [810,"2020-06-09T05:34:00",12.97766888,77.59877764,"N","Level_0","None","Queen's Road"],
        [811,"2020-06-09T05:34:00",12.977611,77.59880773,"N","Level_0","None","Queen's Road"],
        [812,"2020-06-09T05:33:00",12.97754479,77.59883391,"N","Level_0","None","Queen's Road"],
        [813,"2020-06-09T05:33:00",12.97747465,77.5988657,"N","Level_0","None","Queen's Road"],
        [814,"2020-06-09T05:33:00",12.97740535,77.59889466,"N","Level_0","None","Queen's Road"],
        [815,"2020-06-09T05:33:00",12.97733284,77.59892079,"N","Level_0","None","Queen's Road"],
        [816,"2020-06-09T05:33:00",12.97727479,77.59895932,"N","Level_0","None","Queen's Road"],
        [817,"2020-06-09T05:33:00",12.97721223,77.59899553,"N","Level_0","None","Queen's Road"],
        [818,"2020-06-09T05:33:00",12.97715005,77.59902869,"N","Level_0","None","Queen's Road"],
        [819,"2020-06-09T05:33:00",12.97707511,77.59907272,"N","Level_0","None","Mahatma Gandhi Road"],
        [820,"2020-06-09T05:33:00",12.97700822,77.59909962,"N","Level_0","None","Mahatma Gandhi Circle"],
        [821,"2020-06-09T05:33:00",12.97694603,77.59913494,"N","Level_0","None","Mahatma Gandhi Circle"],
        [822,"2020-06-09T05:33:00",12.97687975,77.59915224,"N","Level_0","None","Kasturba Road"],
        [823,"2020-06-09T05:33:00",12.97682398,77.59917366,"N","Level_0","None","Kasturba Road"],
        [824,"2020-06-09T05:33:00",12.97676055,77.59916661,"N","Level_0","None","Kasturba Road"],
        [825,"2020-06-09T05:33:00",12.97670209,77.59916425,"N","Level_0","None","Kasturba Road"],
        [826,"2020-06-09T05:33:00",12.97664284,77.5991445,"N","Level_0","None","Kasturba Road"],
        [827,"2020-06-09T05:33:00",12.97658687,77.59911454,"N","Level_0","None","Kasturba Road"],
        [828,"2020-06-09T05:33:00",12.97653506,77.59908366,"N","Level_0","None","Kasturba Road"],
        [829,"2020-06-09T05:33:00",12.97647711,77.59904892,"N","Level_0","None","Kasturba Road"],
        [830,"2020-06-09T05:33:00",12.97643031,77.59900484,"N","Level_0","None","Kasturba Road"],
        [831,"2020-06-09T05:33:00",12.97633957,77.59890707,"E","Level_0","None","Kasturba Road"],
        [832,"2020-06-09T05:33:00",12.97630429,77.59886854,"E","Level_0","None","Kasturba Road"],
        [833,"2020-06-09T05:33:00",12.97627235,77.59881937,"E","Level_0","None","Kasturba Road"],
        [834,"2020-06-09T05:33:00",12.97624282,77.59876791,"E","Level_0","None","Kasturba Road"],
        [835,"2020-06-09T05:33:00",12.97622773,77.59871217,"E","Level_0","None","Kasturba Road"],
        [836,"2020-06-09T05:33:00",12.97619999,77.59867466,"E","Level_0","None","Kasturba Road"],
        [837,"2020-06-09T05:33:00",12.97617304,77.59864004,"E","Level_0","None","Kasturba Road"],
        [838,"2020-06-09T05:33:00",12.97615026,77.59861079,"E","Level_0","None","Kasturba Road"],
        [839,"2020-06-09T05:33:00",12.9761304,77.59858435,"E","Level_0","None","Kasturba Road"],
        [840,"2020-06-09T05:33:00",12.97611278,77.59855969,"E","Level_0","None","Kasturba Road"],
        [841,"2020-06-09T05:33:00",12.97609057,77.59852272,"E","Level_0","None","Kasturba Road"],
        [842,"2020-06-09T05:32:00",12.97607975,77.59849564,"E","Level_0","None","Kasturba Road"],
        [843,"2020-06-09T05:32:00",12.9760802,77.59846789,"E","Level_0","None","Kasturba Road"],
        [844,"2020-06-09T05:32:00",12.97606398,77.59844332,"E","Level_0","None","Kasturba Road"],
        [845,"2020-06-09T05:31:00",12.97605815,77.59841514,"E","Level_0","None","Kasturba Road"],
        [846,"2020-06-09T05:31:00",12.97604483,77.59838602,"E","Level_0","None","Kasturba Road"],
        [847,"2020-06-09T05:31:00",12.97602856,77.59836335,"E","Level_0","None","Kasturba Road"],
        [848,"2020-06-09T05:31:00",12.97600445,77.59833241,"E","Level_0","None","Kasturba Road"],
        [849,"2020-06-09T05:31:00",12.97598303,77.59830175,"E","Level_0","None","Kasturba Road"],
        [850,"2020-06-09T05:31:00",12.97596054,77.59826696,"E","Level_0","None","Kasturba Road"],
        [851,"2020-06-09T05:31:00",12.97593326,77.5982358,"E","Level_0","None","Kasturba Road"],
        [852,"2020-06-09T05:31:00",12.97591527,77.59819868,"E","Level_0","None","Kasturba Road"],
        [853,"2020-06-09T05:31:00",12.9758915,77.59816055,"E","Level_0","None","Kasturba Road"],
        [854,"2020-06-09T05:31:00",12.97586618,77.59811831,"E","Level_0","None","Kasturba Road"],
        [855,"2020-06-09T05:31:00",12.97583193,77.59807739,"E","Level_0","None","Kasturba Road"],
        [856,"2020-06-09T05:31:00",12.97579466,77.59802641,"E","Level_0","None","Kasturba Road"],
        [857,"2020-06-09T05:31:00",12.97574793,77.59795793,"E","Level_0","None","Kasturba Road"],
        [858,"2020-06-09T05:31:00",12.97570413,77.59790001,"E","Level_0","None","Kasturba Road"],
        [859,"2020-06-09T05:31:00",12.97562021,77.59778619,"E","Level_0","None","Kasturba Road"],
        [860,"2020-06-09T05:31:00",12.97557584,77.59772815,"E","Level_0","None","Kasturba Road"],
        [861,"2020-06-09T05:31:00",12.97552822,77.59766512,"E","Level_0","None","Kasturba Road"],
        [862,"2020-06-09T05:31:00",12.97548004,77.59760086,"E","Level_0","None","Kasturba Road"],
        [863,"2020-06-09T05:31:00",12.97542292,77.59753467,"E","Level_0","None","Kasturba Road"],
        [864,"2020-06-09T05:31:00",12.97537477,77.59747309,"E","Level_0","None","Kasturba Road"],
        [865,"2020-06-09T05:31:00",12.97529808,77.59736011,"E","Level_0","None","Kasturba Road"],
        [866,"2020-06-09T05:31:00",12.97525773,77.59729065,"E","Level_0","None","Kasturba Road"],
        [867,"2020-06-09T05:31:00",12.9752189,77.59723339,"E","Level_0","None","Kasturba Road"],
        [868,"2020-06-09T05:31:00",12.9751635,77.59716143,"E","Level_0","None","Kasturba Road"],
        [869,"2020-06-09T05:31:00",12.97512264,77.5971013,"E","Level_0","None","Kasturba Road"],
        [870,"2020-06-09T05:31:00",12.97508148,77.59703643,"E","Level_0","None","Kasturba Road"],
        [871,"2020-06-09T05:31:00",12.97503595,77.59697827,"E","Level_0","None","Kasturba Road"],
        [872,"2020-06-09T05:31:00",12.9749896,77.59691526,"E","Level_0","None","Kasturba Road"],
        [873,"2020-06-09T05:31:00",12.97493906,77.59684639,"E","Level_0","None","Kasturba Road"],
        [874,"2020-06-09T05:31:00",12.97489005,77.59678171,"E","Level_0","None","Kasturba Road"],
        [875,"2020-06-09T05:31:00",12.97483998,77.59672068,"E","Level_0","None","Kasturba Road"],
        [876,"2020-06-09T05:31:00",12.97479015,77.59665883,"E","Level_0","None","Kasturba Road"],
        [877,"2020-06-09T05:31:00",12.97474255,77.59660038,"E","Level_0","None","Kasturba Road"],
        [878,"2020-06-09T05:31:00",12.97469724,77.59654316,"E","Level_0","None","Kasturba Road"],
        [879,"2020-06-09T05:31:00",12.97465249,77.59648427,"E","Level_0","None","Kasturba Road"],
        [880,"2020-06-09T05:31:00",12.97455299,77.59636129,"E","Level_0","None","Kasturba Road"],
        [881,"2020-06-09T05:31:00",12.97449568,77.59630008,"E","Level_0","None","Kasturba Road"],
        [882,"2020-06-09T05:31:00",12.97443679,77.59623424,"E","Level_0","None","Kasturba Road"],
        [883,"2020-06-09T05:31:00",12.97437779,77.59616902,"E","Level_0","None","Kasturba Road"],
        [884,"2020-06-09T05:31:00",12.97432089,77.59610239,"E","Level_0","None","Kasturba Road"],
        [885,"2020-06-09T05:31:00",12.97426457,77.5960389,"E","Level_0","None","Kasturba Road"],
        [886,"2020-06-09T05:31:00",12.97420418,77.59597525,"E","Level_0","None","Kasturba Road"],
        [887,"2020-06-09T05:31:00",12.97415439,77.59591345,"E","Level_0","None","Kasturba Road"],
        [888,"2020-06-09T05:31:00",12.97410625,77.59585757,"E","Level_0","None","Kasturba Road"],
        [889,"2020-06-09T05:31:00",12.97405873,77.59579751,"E","Level_0","None","Kasturba Road"],
        [890,"2020-06-09T05:31:00",12.9740026,77.59573691,"E","Level_0","None","Kasturba Road"],
        [891,"2020-06-09T05:31:00",12.9739502,77.5956804,"E","Level_0","None","Kasturba Road"],
        [892,"2020-06-09T05:31:00",12.97389836,77.59562706,"E","Level_0","None","Kasturba Road"],
        [893,"2020-06-09T05:31:00",12.97384988,77.59556343,"E","Level_0","None","Kasturba Road"],
        [894,"2020-06-09T05:31:00",12.97380646,77.59551143,"E","Level_0","None","Kasturba Road"],
        [895,"2020-06-09T05:31:00",12.97376361,77.59546173,"E","Level_0","None","Kasturba Road"],
        [896,"2020-06-09T05:30:00",12.97372155,77.59541572,"E","Level_0","None","Kasturba Road"],
        [897,"2020-06-09T05:30:00",12.97368207,77.59536979,"E","Level_0","None","Kasturba Road"],
        [898,"2020-06-09T05:30:00",12.97364043,77.59532924,"E","Level_0","None","Kasturba Road"],
        [899,"2020-06-09T05:30:00",12.97359527,77.59528759,"E","Level_0","None","Kasturba Road"],
        [900,"2020-06-09T05:30:00",12.97356232,77.59524882,"E","Level_0","None","Kasturba Road"]
    ]
    // 1001-1100
    const records4 = [
        [1001,"2020-06-09T05:29:00",12.96936392,77.59069899,"N","Level_0","None","Kasturba Road"],
        [1002,"2020-06-09T05:29:00",12.96932076,77.59064917,"N","Level_0","None","Kasturba Road"],
        [1003,"2020-06-09T05:29:00",12.96927239,77.59059773,"N","Level_0","None","Kasturba Road"],
        [1004,"2020-06-09T05:29:00",12.96922055,77.59054116,"E","Level_0","None","Kasturba Road"],
        [1005,"2020-06-09T05:29:00",12.96917404,77.59048531,"N","Level_0","None","Kasturba Road"],
        [1006,"2020-06-09T05:29:00",12.96912287,77.59043868,"N","Level_0","None","Kasturba Road"],
        [1007,"2020-06-09T05:28:00",12.96908453,77.59039268,"N","Level_0","None","Kasturba Road"],
        [1008,"2020-06-09T05:28:00",12.96903389,77.590336,"N","Level_0","None","Kasturba Road"],
        [1009,"2020-06-09T05:28:00",12.96898728,77.59029153,"E","Level_0","None","Kasturba Road"],
        [1010,"2020-06-09T05:28:00",12.96893661,77.59024032,"E","Level_0","None","Kasturba Road"],
        [1011,"2020-06-09T05:28:00",12.96888332,77.59018533,"E","Level_0","None","Kasturba Road"],
        [1012,"2020-06-09T05:28:00",12.96883804,77.59014039,"E","Level_0","None","Kasturba Road"],
        [1013,"2020-06-09T05:28:00",12.96879468,77.59008862,"E","Level_0","None","Kasturba Road"],
        [1014,"2020-06-09T05:28:00",12.96874479,77.59003191,"E","Level_0","None"," Corporation Circle"],
        [1015,"2020-06-09T05:28:00",12.968702,77.58998496,"E","Level_0","None","Cubbon Park"],
        [1016,"2020-06-09T05:28:00",12.96865207,77.58993665,"E","Level_0","None"," Corporation Circle"],
        [1017,"2020-06-09T05:28:00",12.96860788,77.58988949,"E","Level_0","None","Cubbon Park"],
        [1018,"2020-06-09T05:28:00",12.96855545,77.58983466,"E","Level_0","None"," Corporation Circle"],
        [1019,"2020-06-09T05:28:00",12.96850495,77.58978463,"E","Level_0","None","Cubbon Park"],
        [1020,"2020-06-09T05:28:00",12.96846428,77.58973421,"E","Level_0","None"," Corporation Circle"],
        [1021,"2020-06-09T05:28:00",12.96842225,77.58967771,"E","Level_0","None","Cubbon Park"],
        [1022,"2020-06-09T05:28:00",12.9683897,77.58963904,"E","Level_0","None"," Corporation Circle"],
        [1023,"2020-06-09T05:28:00",12.96834693,77.58958376,"E","Level_0","None","Cubbon Park"],
        [1024,"2020-06-09T05:28:00",12.96830354,77.58953498,"E","Level_0","None","Kasturba Road"],
        [1025,"2020-06-09T05:28:00",12.96826045,77.5894864,"E","Level_0","None","Kasturba Road"],
        [1026,"2020-06-09T05:28:00",12.96821486,77.58943565,"E","Level_0","None","Proposed Hudson Cricle - Minerva Circle Flyover"],
        [1027,"2020-06-09T05:28:00",12.96816537,77.58938166,"E","Level_0","None","Proposed Hudson Cricle - Minerva Circle Flyover"],
        [1028,"2020-06-09T05:28:00",12.9681178,77.58933575,"E","Level_0","None","Proposed Hudson Cricle - Minerva Circle Flyover"],
        [1029,"2020-06-09T05:28:00",12.96807053,77.58929597,"N","Level_0","None","Kasturba Road"],
        [1030,"2020-06-09T05:28:00",12.96802787,77.58926003,"N","Level_0","None","Kasturba Road"],
        [1031,"2020-06-09T05:28:00",12.96798864,77.58923353,"N","Level_0","None","Kasturba Road"],
        [1032,"2020-06-09T05:28:00",12.96794723,77.58921724,"N","Level_0","None","Kasturba Road"],
        [1033,"2020-06-09T05:28:00",12.96789647,77.58920802,"N","Level_0","None","Used Car Sales"],
        [1034,"2020-06-09T05:28:00",12.96785336,77.58921071,"N","Level_0","None","Used Car Sales"],
        [1035,"2020-06-09T05:28:00",12.96781187,77.5892309,"N","Level_0","None","Used Car Sales"],
        [1036,"2020-06-09T05:28:00",12.96778176,77.58926413,"W","Level_0","None","Devanga Hostel Road"],
        [1037,"2020-06-09T05:28:00",12.96775741,77.58930952,"W","Level_0","None","Devanga Hostel Road"],
        [1038,"2020-06-09T05:28:00",12.96773793,77.58936142,"W","Level_0","None","Devanga Hostel Road"],
        [1039,"2020-06-09T05:28:00",12.96772774,77.58942257,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1040,"2020-06-09T05:28:00",12.96772363,77.58948425,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1041,"2020-06-09T05:28:00",12.96771973,77.58955747,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1042,"2020-06-09T05:28:00",12.96771976,77.58970912,"W","Level_0","None","8th Main Road"],
        [1043,"2020-06-09T05:28:00",12.9677219,77.58978391,"W","Level_0","None","8th Main Road"],
        [1044,"2020-06-09T05:28:00",12.96772358,77.58986607,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1045,"2020-06-09T05:28:00",12.96773285,77.59002259,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1046,"2020-06-09T05:28:00",12.96773951,77.59010733,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1047,"2020-06-09T05:28:00",12.96774582,77.59018698,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1048,"2020-06-09T05:28:00",12.96775656,77.59027306,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1049,"2020-06-09T05:28:00",12.96777558,77.59036902,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1050,"2020-06-09T05:28:00",12.96778901,77.59045824,"W","Level_0","None","Hudson Circle"],
        [1051,"2020-06-09T05:28:00",12.96780472,77.59054906,"W","Level_0","None","Hudson Circle"],
        [1052,"2020-06-09T05:28:00",12.96780096,77.59064962,"W","Level_0","None","Hudson Circle"],
        [1053,"2020-06-09T05:28:00",12.96783293,77.59078997,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1054,"2020-06-09T05:28:00",12.96785755,77.59086599,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1055,"2020-06-09T05:28:00",12.96788487,77.59093468,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1056,"2020-06-09T05:28:00",12.96791544,77.5909905,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1057,"2020-06-09T05:28:00",12.96794542,77.59106187,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1058,"2020-06-09T05:28:00",12.96797561,77.5911399,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1059,"2020-06-09T05:28:00",12.96800181,77.59121631,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1060,"2020-06-09T05:28:00",12.96802571,77.59129292,"W","Level_0","None","8th Main Road"],
        [1061,"2020-06-09T05:28:00",12.96804713,77.59136793,"W","Level_0","None","8th Main Road"],
        [1062,"2020-06-09T05:28:00",12.96806593,77.59144777,"W","Level_0","None","8th Main Road"],
        [1063,"2020-06-09T05:28:00",12.96807594,77.59152036,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1064,"2020-06-09T05:27:00",12.96808835,77.59159976,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1065,"2020-06-09T05:27:00",12.96810003,77.59167466,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1066,"2020-06-09T05:27:00",12.96810236,77.59175164,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1067,"2020-06-09T05:27:00",12.96810878,77.59182228,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1068,"2020-06-09T05:27:00",12.96810479,77.59190092,"W","Level_0","None","State Bank ATM"],
        [1069,"2020-06-09T05:27:00",12.96809812,77.59197844,"W","Level_0","None","State Bank ATM"],
        [1070,"2020-06-09T05:27:00",12.96809208,77.5920563,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1071,"2020-06-09T05:27:00",12.96808144,77.59213985,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1072,"2020-06-09T05:27:00",12.9680644,77.59222229,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1073,"2020-06-09T05:27:00",12.96805203,77.59229568,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1074,"2020-06-09T05:27:00",12.9680385,77.59235676,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1075,"2020-06-09T05:27:00",12.96802602,77.5924228,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1076,"2020-06-09T05:27:00",12.9680154,77.59248459,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1077,"2020-06-09T05:27:00",12.9679804,77.59258002,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1078,"2020-06-09T05:27:00",12.96795769,77.59265412,"W","Level_0","None","Chidananda Maharashi Ashram Road"],
        [1079,"2020-06-09T05:27:00",12.96795212,77.5927308,"W","Level_0","None","Mishra Pedha"],
        [1080,"2020-06-09T05:27:00",12.96794183,77.59281803,"W","Level_0","None","Mishra Pedha"],
        [1081,"2020-06-09T05:27:00",12.96792877,77.59290366,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1082,"2020-06-09T05:27:00",12.9679095,77.5929831,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1083,"2020-06-09T05:27:00",12.96787695,77.59307137,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1084,"2020-06-09T05:27:00",12.96786527,77.59314774,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1085,"2020-06-09T05:27:00",12.96785257,77.59322454,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1086,"2020-06-09T05:27:00",12.96784019,77.59330269,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1087,"2020-06-09T05:27:00",12.96782864,77.59337821,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1088,"2020-06-09T05:27:00",12.96781237,77.59345318,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1089,"2020-06-09T05:27:00",12.96778951,77.5935261,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1090,"2020-06-09T05:27:00",12.9677645,77.59360112,"W","Level_0","None","3rd Main Road"],
        [1091,"2020-06-09T05:27:00",12.9677416,77.59368066,"W","Level_0","None","3rd Main Road"],
        [1092,"2020-06-09T05:27:00",12.96771977,77.59375484,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1093,"2020-06-09T05:27:00",12.9676886,77.59383388,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1094,"2020-06-09T05:27:00",12.96765786,77.59390834,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1095,"2020-06-09T05:27:00",12.96762644,77.59397293,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1096,"2020-06-09T05:27:00",12.96759748,77.59403942,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1097,"2020-06-09T05:27:00",12.9675691,77.59410596,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1098,"2020-06-09T05:27:00",12.96749852,77.59422027,"W","Level_0","None","Rajaram Mohan Roy Road"],
        [1099,"2020-06-09T05:27:00",12.96739603,77.59432466,"N","Level_0","None","Rajaram Mohan Roy Road"],
        [1100,"2020-06-09T05:27:00",12.96735709,77.5943573,"N","Level_0","None","Rajaram Mohan Roy Road"]
    ]
    // 1201-1300
    const records5 = [
        [1201,"2020-06-09T05:25:00",12.97155162,77.59561303,"W","Level_0","None","Vittal Mallya Road"],
        [1202,"2020-06-09T05:25:00",12.97151805,77.59567927,"W","Level_0","None","Vittal Mallya Road"],
        [1203,"2020-06-09T05:25:00",12.97147742,77.59574599,"W","Level_0","None","Vittal Mallya Road"],
        [1204,"2020-06-09T05:25:00",12.97144277,77.59581746,"W","Level_0","None","Vittal Mallya Road"],
        [1205,"2020-06-09T05:25:00",12.97136894,77.59596811,"W","Level_0","None","Vittal Mallya Road"],
        [1206,"2020-06-09T05:25:00",12.97133801,77.59603131,"W","Level_0","None","Vittal Mallya Road"],
        [1207,"2020-06-09T05:25:00",12.97130802,77.59609711,"W","Level_0","None","Vittal Mallya Road"],
        [1208,"2020-06-09T05:25:00",12.97128564,77.59616123,"W","Level_0","None","Vittal Mallya Road"],
        [1209,"2020-06-09T05:25:00",12.97125686,77.59622472,"W","Level_0","None","Vittal Mallya Road"],
        [1210,"2020-06-09T05:25:00",12.97122633,77.59629241,"W","Level_0","None","Vittal Mallya Road"],
        [1211,"2020-06-09T05:25:00",12.97119533,77.59635648,"W","Level_0","None","Vittal Mallya Road"],
        [1212,"2020-06-09T05:25:00",12.97115139,77.59649881,"W","Level_0","None","Vittal Mallya Road"],
        [1213,"2020-06-09T05:25:00",12.97113563,77.59657297,"W","Level_0","None","Vittal Mallya Road"],
        [1214,"2020-06-09T05:25:00",12.97113276,77.59664835,"W","Level_0","None","Vittal Mallya Road"],
        [1215,"2020-06-09T05:25:00",12.97112613,77.59679075,"W","Level_0","None","Vittal Mallya Road"],
        [1216,"2020-06-09T05:25:00",12.9711237,77.59685438,"W","Level_0","None","Vittal Mallya Road"],
        [1217,"2020-06-09T05:25:00",12.97112349,77.59692018,"W","Level_0","None","Vittal Mallya Road"],
        [1218,"2020-06-09T05:25:00",12.97112307,77.59698939,"W","Level_0","None","Vittal Mallya Road"],
        [1219,"2020-06-09T05:25:00",12.97112484,77.59706051,"W","Level_0","None","Vittal Mallya Road"],
        [1220,"2020-06-09T05:24:00",12.9711248,77.59712607,"W","Level_0","None","Vittal Mallya Road"],
        [1221,"2020-06-09T05:24:00",12.97112569,77.59719228,"W","Level_0","None","Vittal Mallya Road"],
        [1222,"2020-06-09T05:24:00",12.97112538,77.59724948,"W","Level_0","None","Vittal Mallya Road"],
        [1223,"2020-06-09T05:24:00",12.97112251,77.59730188,"W","Level_0","None","Vittal Mallya Road"],
        [1224,"2020-06-09T05:24:00",12.97112223,77.59736799,"W","Level_0","None","Vittal Mallya Road"],
        [1225,"2020-06-09T05:24:00",12.97112583,77.59741805,"W","Level_0","None","Vittal Mallya Road"],
        [1226,"2020-06-09T05:24:00",12.97112298,77.5974514,"W","Level_0","None","Vittal Mallya Road"],
        [1227,"2020-06-09T05:24:00",12.97112169,77.5974898,"W","Level_0","None","Lavelle Road"],
        [1228,"2020-06-09T05:24:00",12.97112518,77.59753035,"W","Level_0","None","Lavelle Road"],
        [1229,"2020-06-09T05:24:00",12.97112685,77.59757516,"W","Level_0","None","Lavelle Road"],
        [1230,"2020-06-09T05:24:00",12.97112574,77.5976206,"W","Level_0","None","Vittal Mallya Road"],
        [1231,"2020-06-09T05:24:00",12.97110686,77.59767644,"W","Level_0","None","Vittal Mallya Road"],
        [1232,"2020-06-09T05:24:00",12.97110965,77.59789554,"W","Level_0","None","Dr. Vittal Mallya"],
        [1233,"2020-06-09T05:24:00",12.97110067,77.59793417,"W","Level_0","None","Vittal Mallya Road"],
        [1234,"2020-06-09T05:24:00",12.97109201,77.5979687,"W","Level_0","None","Vittal Mallya Road"],
        [1235,"2020-06-09T05:24:00",12.97107837,77.59803194,"W","Level_0","None","Vittal Mallya Road"],
        [1236,"2020-06-09T05:24:00",12.97107113,77.59806271,"W","Level_0","None","Vittal Mallya Road"],
        [1237,"2020-06-09T05:24:00",12.97106495,77.598115,"W","Level_0","None","Vittal Mallya Road"],
        [1238,"2020-06-09T05:24:00",12.97104475,77.598162,"W","Level_0","None","Vittal Mallya Road"],
        [1239,"2020-06-09T05:24:00",12.971037,77.59818941,"W","Level_0","None","Vittal Mallya Road"],
        [1240,"2020-06-09T05:24:00",12.97102332,77.59825163,"W","Level_0","None","Levi's"],
        [1241,"2020-06-09T05:24:00",12.97101743,77.59828848,"W","Level_0","None","Levi's"],
        [1242,"2020-06-09T05:24:00",12.97100223,77.59833181,"W","Level_0","None","Levi's"],
        [1243,"2020-06-09T05:24:00",12.97099986,77.59837952,"W","Level_0","None","Levi's"],
        [1244,"2020-06-09T05:24:00",12.9709942,77.59842749,"W","Level_0","None","Vittal Mallya Road"],
        [1245,"2020-06-09T05:24:00",12.97097699,77.59847365,"W","Level_0","None","Vittal Mallya Road"],
        [1246,"2020-06-09T05:24:00",12.97097307,77.59852016,"W","Level_0","None","Vittal Mallya Road"],
        [1247,"2020-06-09T05:24:00",12.97094782,77.59858252,"W","Level_0","None","Vittal Mallya Road"],
        [1248,"2020-06-09T05:24:00",12.97093741,77.59862355,"W","Level_0","None","Vittal Mallya Road"],
        [1249,"2020-06-09T05:24:00",12.97092989,77.59866051,"W","Level_0","None","Vittal Mallya Road"],
        [1250,"2020-06-09T05:24:00",12.9709239,77.59871962,"W","Level_0","None","Vittal Mallya Road"],
        [1251,"2020-06-09T05:24:00",12.97092414,77.59875682,"W","Level_0","None","Vittal Mallya Road"],
        [1252,"2020-06-09T05:24:00",12.97090221,77.59879083,"W","Level_0","None","Espirit"],
        [1253,"2020-06-09T05:24:00",12.9708757,77.59881432,"W","Level_0","None","Espirit"],
        [1254,"2020-06-09T05:24:00",12.97086021,77.59885154,"W","Level_0","None","Espirit"],
        [1255,"2020-06-09T05:24:00",12.97084193,77.59892538,"W","Level_0","None","Vittal Mallya Road"],
        [1256,"2020-06-09T05:24:00",12.9708304,77.59897639,"W","Level_0","None","Vittal Mallya Road"],
        [1257,"2020-06-09T05:24:00",12.97081993,77.59901628,"W","Level_0","None","Vittal Mallya Road"],
        [1258,"2020-06-09T05:24:00",12.97081296,77.59904352,"W","Level_0","None","Vittal Mallya Road"],
        [1259,"2020-06-09T05:23:00",12.97080143,77.59907004,"W","Level_0","None","Vittal Mallya Road"],
        [1260,"2020-06-09T05:23:00",12.97079336,77.59909855,"W","Level_0","None","Vittal Mallya Road"],
        [1261,"2020-06-09T05:23:00",12.9707713,77.59912566,"W","Level_0","None","Vittal Mallya Road"],
        [1262,"2020-06-09T05:23:00",12.97075812,77.59915952,"W","Level_0","None","Vittal Mallya Road"],
        [1263,"2020-06-09T05:23:00",12.97074686,77.59918947,"W","Level_0","None","Vittal Mallya Road"],
        [1264,"2020-06-09T05:23:00",12.9707347,77.5992239,"W","Level_0","None","Vittal Mallya Road"],
        [1265,"2020-06-09T05:23:00",12.97071578,77.59926636,"W","Level_0","None","Vittal Mallya Road"],
        [1266,"2020-06-09T05:23:00",12.97070143,77.59931213,"W","Level_0","None","Vittal Mallya Road"],
        [1267,"2020-06-09T05:23:00",12.97069328,77.5993571,"W","Level_0","None","Vittal Mallya Road"],
        [1268,"2020-06-09T05:23:00",12.97068116,77.59939142,"W","Level_0","None","Vittal Mallya Road"],
        [1269,"2020-06-09T05:23:00",12.97064567,77.59948521,"W","Level_0","None","Vittal Mallya Road"],
        [1270,"2020-06-09T05:23:00",12.97063851,77.59953913,"W","Level_0","None","ICICI Bank"],
        [1271,"2020-06-09T05:23:00",12.97062386,77.59959408,"W","Level_0","None","ICICI Bank"],
        [1272,"2020-06-09T05:23:00",12.97060287,77.59965702,"W","Level_0","None","ICICI Bank"],
        [1273,"2020-06-09T05:23:00",12.970578,77.59977896,"W","Level_0","None","Vittal Mallya Road"],
        [1274,"2020-06-09T05:23:00",12.97057278,77.59983891,"W","Level_0","None","Vittal Mallya Road"],
        [1275,"2020-06-09T05:23:00",12.9705571,77.59990378,"W","Level_0","None","Vittal Mallya Road"],
        [1276,"2020-06-09T05:23:00",12.97053289,77.59996809,"W","Level_0","None","Vittal Mallya Road"],
        [1277,"2020-06-09T05:23:00",12.97050906,77.60003355,"W","Level_0","None","Vittal Mallya Road"],
        [1278,"2020-06-09T05:23:00",12.97048796,77.60010044,"W","Level_0","None","Vittal Mallya Road"],
        [1279,"2020-06-09T05:23:00",12.97044362,77.6002273,"W","Level_0","None","Vittal Mallya Road"],
        [1280,"2020-06-09T05:23:00",12.97042175,77.60029565,"W","Level_0","None","Vittal Mallya Road"],
        [1281,"2020-06-09T05:23:00",12.97040425,77.60036354,"W","Level_0","None","Vittal Mallya Road"],
        [1282,"2020-06-09T05:23:00",12.97038672,77.60043021,"W","Level_0","None","Vittal Mallya Road"],
        [1283,"2020-06-09T05:23:00",12.97037664,77.60048647,"W","Level_0","None","Vittal Mallya Road"],
        [1284,"2020-06-09T05:23:00",12.97036766,77.60054518,"W","Level_0","None","Vittal Mallya Road"],
        [1285,"2020-06-09T05:23:00",12.97035409,77.60059111,"W","Level_0","None","Vittal Mallya Road"],
        [1286,"2020-06-09T05:23:00",12.9703426,77.6006328,"W","Level_0","None","Vittal Mallya Road"],
        [1287,"2020-06-09T05:23:00",12.97033202,77.60067497,"W","Level_0","None","Vittal Mallya Road"],
        [1288,"2020-06-09T05:23:00",12.97033457,77.60072429,"W","Level_0","None","Vittal Mallya Road"],
        [1289,"2020-06-09T05:23:00",12.97035606,77.60075897,"S","Level_0","None","Vittal Mallya Road"],
        [1290,"2020-06-09T05:23:00",12.97042534,77.60079904,"S","Level_0","None","Saint Mark's Road"],
        [1291,"2020-06-09T05:23:00",12.97048245,77.60081902,"S","Level_0","None","Saint Mark's Road"],
        [1292,"2020-06-09T05:23:00",12.97057733,77.60083966,"S","Level_0","None","Saint Mark's Road"],
        [1293,"2020-06-09T05:23:00",12.97061963,77.60085545,"S","Level_0","None","Saint Mark's Road"],
        [1294,"2020-06-09T05:23:00",12.97066324,77.60086892,"S","Level_0","None","Bank of India"],
        [1295,"2020-06-09T05:23:00",12.97070473,77.60087687,"S","Level_0","None","Saint Mark's Road"],
        [1296,"2020-06-09T05:23:00",12.97075485,77.60089073,"S","Level_0","None","Saint Mark's Road"],
        [1297,"2020-06-09T05:23:00",12.97081046,77.60090423,"S","Level_0","None","Saint Mark's Road"],
        [1298,"2020-06-09T05:23:00",12.97086044,77.60091256,"S","Level_0","None","Saint Mark's Road"],
        [1299,"2020-06-09T05:23:00",12.97091696,77.60092047,"S","Level_0","None","Pappana Street"],
        [1300,"2020-06-09T05:23:00",12.97097976,77.60093108,"S","Level_0","None","Pappana Street"]
    ]
    // 1401-1500
    const records6 =[
        [1401,"2020-06-09T05:21:00",12.97509292,77.60271785,"S","Level_0","None","Museum Road"],
        [1402,"2020-06-09T05:21:00",12.9751409,77.60269897,"S","Level_0","None","Museum Road"],
        [1403,"2020-06-09T05:21:00",12.97521229,77.60270859,"S","Level_0","None","Angeethi"],
        [1404,"2020-06-09T05:21:00",12.97525369,77.60269464,"S","Level_0","None","Angeethi"],
        [1405,"2020-06-09T05:20:00",12.97529068,77.60268085,"S","Level_0","None","Empire"],
        [1406,"2020-06-09T05:20:00",12.97532025,77.60266768,"S","Level_0","None","Empire"],
        [1407,"2020-06-09T05:20:00",12.97536266,77.60264877,"S","Level_0","None","Empire"],
        [1408,"2020-06-09T05:20:00",12.9753977,77.60265495,"S","Level_0","None","Empire"],
        [1409,"2020-06-09T05:20:00",12.97541737,77.60268804,"W","Level_0","None","Empire"],
        [1410,"2020-06-09T05:20:00",12.97542485,77.60271859,"W","Level_0","None","Empire"],
        [1411,"2020-06-09T05:20:00",12.9754266,77.60275653,"W","Level_0","None","Empire"],
        [1412,"2020-06-09T05:20:00",12.97542402,77.60279337,"W","Level_0","None","Empire"],
        [1413,"2020-06-09T05:20:00",12.97542086,77.60282662,"W","Level_0","None","Empire"],
        [1414,"2020-06-09T05:20:00",12.97541929,77.60286138,"W","Level_0","None","Empire"],
        [1415,"2020-06-09T05:20:00",12.97541478,77.60289755,"W","Level_0","None","Empire"],
        [1416,"2020-06-09T05:20:00",12.97540788,77.60293536,"W","Level_0","None","Highgates Hotel"],
        [1417,"2020-06-09T05:20:00",12.97540079,77.60297901,"W","Level_0","None","Hoppipola"],
        [1418,"2020-06-09T05:20:00",12.97539297,77.60302368,"W","Level_0","None","Hoppipola"],
        [1419,"2020-06-09T05:20:00",12.97538441,77.60306386,"W","Level_0","None","Hoppipola"],
        [1420,"2020-06-09T05:20:00",12.97537399,77.60310199,"W","Level_0","None","Mainland China"],
        [1421,"2020-06-09T05:20:00",12.97536217,77.60314078,"W","Level_0","None","Oh! Calcutta"],
        [1422,"2020-06-09T05:20:00",12.97534869,77.6031794,"W","Level_0","None","Oh! Calcutta"],
        [1423,"2020-06-09T05:20:00",12.97531846,77.60325878,"W","Level_0","None","Oh! Calcutta"],
        [1424,"2020-06-09T05:20:00",12.97530489,77.60329714,"W","Level_0","None","Church Street"],
        [1425,"2020-06-09T05:20:00",12.97529315,77.60333457,"W","Level_0","None","Church Street"],
        [1426,"2020-06-09T05:20:00",12.97528224,77.60337196,"W","Level_0","None","Church Street"],
        [1427,"2020-06-09T05:20:00",12.97527404,77.60340928,"W","Level_0","None","Bheema's"],
        [1428,"2020-06-09T05:20:00",12.97526762,77.60344799,"W","Level_0","None","Bheema's"],
        [1429,"2020-06-09T05:20:00",12.97526077,77.60348833,"W","Level_0","None","Bheema's"],
        [1430,"2020-06-09T05:20:00",12.97525481,77.60352888,"W","Level_0","None","Bheema's"],
        [1431,"2020-06-09T05:20:00",12.97524752,77.60360615,"W","Level_0","None","Bheema's"],
        [1432,"2020-06-09T05:20:00",12.97524537,77.60364906,"W","Level_0","None","Church Street"],
        [1433,"2020-06-09T05:20:00",12.97524213,77.60369297,"W","Level_0","None","Hum India"],
        [1434,"2020-06-09T05:20:00",12.97523815,77.60373494,"W","Level_0","None","Hum India"],
        [1435,"2020-06-09T05:20:00",12.97523171,77.60377651,"W","Level_0","None","Hum India"],
        [1436,"2020-06-09T05:20:00",12.97522541,77.60381964,"W","Level_0","None","Hum India"],
        [1437,"2020-06-09T05:20:00",12.97521586,77.60386164,"W","Level_0","None","LGCL Thinking Spaces"],
        [1438,"2020-06-09T05:20:00",12.97520639,77.60390146,"W","Level_0","None","LGCL Thinking Spaces"],
        [1439,"2020-06-09T05:20:00",12.97519736,77.6039411,"W","Level_0","None","LGCL Thinking Spaces"],
        [1440,"2020-06-09T05:20:00",12.9751885,77.60398192,"W","Level_0","None","Rest House Crescent Road"],
        [1441,"2020-06-09T05:20:00",12.97518007,77.60402369,"W","Level_0","None","Rest House Crescent Road"],
        [1442,"2020-06-09T05:20:00",12.97517164,77.60406431,"W","Level_0","None","Abu Dhabi Commercial Bank"],
        [1443,"2020-06-09T05:20:00",12.97516284,77.60410284,"W","Level_0","None","Church Street"],
        [1444,"2020-06-09T05:20:00",12.97515273,77.6041392,"W","Level_0","None","Rest House Crescent Road"],
        [1445,"2020-06-09T05:20:00",12.97514385,77.60417352,"W","Level_0","None","Rest House Crescent Road"],
        [1446,"2020-06-09T05:20:00",12.97513587,77.60420876,"W","Level_0","None","Rest House Crescent Road"],
        [1447,"2020-06-09T05:20:00",12.97512711,77.60424835,"W","Level_0","None","Rest House Crescent Road"],
        [1448,"2020-06-09T05:20:00",12.97511809,77.6042889,"W","Level_0","None","Rest House Crescent Road"],
        [1449,"2020-06-09T05:20:00",12.97510816,77.60433054,"W","Level_0","None","Coco Grove"],
        [1450,"2020-06-09T05:20:00",12.97509226,77.60441814,"W","Level_0","None","Coco Grove"],
        [1451,"2020-06-09T05:20:00",12.97508486,77.6044637,"W","Level_0","None","Coco Grove"],
        [1452,"2020-06-09T05:20:00",12.9750766,77.60450998,"W","Level_0","None","Church Street"],
        [1453,"2020-06-09T05:20:00",12.9750693,77.60455271,"W","Level_0","None","Church Street"],
        [1454,"2020-06-09T05:20:00",12.97506246,77.60459241,"W","Level_0","None","Church Street"],
        [1455,"2020-06-09T05:20:00",12.97505654,77.60463446,"W","Level_0","None","Church Street"],
        [1456,"2020-06-09T05:20:00",12.97504987,77.60467688,"W","Level_0","None","Church Street"],
        [1457,"2020-06-09T05:20:00",12.97504263,77.60471632,"W","Level_0","None","Church Street"],
        [1458,"2020-06-09T05:19:00",12.97502741,77.60478958,"W","Level_0","None","Church Street"],
        [1459,"2020-06-09T05:19:00",12.97501717,77.60482659,"W","Level_0","None","Church Street"],
        [1460,"2020-06-09T05:19:00",12.97500496,77.60486514,"W","Level_0","None","Church Street"],
        [1461,"2020-06-09T05:19:00",12.97499171,77.60490489,"W","Level_0","None","Church Street"],
        [1462,"2020-06-09T05:19:00",12.97497853,77.60494429,"W","Level_0","None","Church Street"],
        [1463,"2020-06-09T05:19:00",12.97496767,77.60498309,"W","Level_0","None","Church Street"],
        [1464,"2020-06-09T05:19:00",12.97495818,77.60502128,"W","Level_0","None","Church Street"],
        [1465,"2020-06-09T05:19:00",12.97494991,77.60506019,"W","Level_0","None","Church Street"],
        [1466,"2020-06-09T05:19:00",12.97494236,77.60509918,"W","Level_0","None","Church Street"],
        [1467,"2020-06-09T05:19:00",12.9749352,77.60513949,"W","Level_0","None","Asha Enclave"],
        [1468,"2020-06-09T05:19:00",12.97492792,77.60518122,"W","Level_0","None","Asha Enclave"],
        [1469,"2020-06-09T05:19:00",12.97491732,77.60526134,"W","Level_0","None","3rd Floor Church Street"],
        [1470,"2020-06-09T05:19:00",12.97490266,77.60530622,"W","Level_0","None","3rd Floor Church Street"],
        [1471,"2020-06-09T05:19:00",12.97489493,77.60534612,"W","Level_0","None","Church Street"],
        [1472,"2020-06-09T05:19:00",12.97485347,77.60547224,"W","Level_0","None","Church Street"],
        [1473,"2020-06-09T05:19:00",12.97484079,77.60550875,"W","Level_0","None","Church Street"],
        [1474,"2020-06-09T05:19:00",12.97482854,77.60554074,"W","Level_0","None","Church Street"],
        [1475,"2020-06-09T05:19:00",12.97482038,77.60558429,"W","Level_0","None","Church Street"],
        [1476,"2020-06-09T05:19:00",12.97480976,77.6056304,"W","Level_0","None","Amoeba"],
        [1477,"2020-06-09T05:19:00",12.97480203,77.60567745,"W","Level_0","None","Ruby Tuesday"],
        [1478,"2020-06-09T05:19:00",12.97479203,77.60572454,"W","Level_0","None","Ruby Tuesday"],
        [1479,"2020-06-09T05:19:00",12.9747877,77.60578114,"W","Level_0","None","Ruby Tuesday"],
        [1480,"2020-06-09T05:19:00",12.97477776,77.60583121,"W","Level_0","None","Church Street"],
        [1481,"2020-06-09T05:19:00",12.97476839,77.60588527,"W","Level_0","None","Church Street"],
        [1482,"2020-06-09T05:19:00",12.97476478,77.60593039,"W","Level_0","None","Church Street"],
        [1483,"2020-06-09T05:19:00",12.9747568,77.60597815,"W","Level_0","None","Church Street"],
        [1484,"2020-06-09T05:19:00",12.97475656,77.606037,"W","Level_0","None","Church Street"],
        [1485,"2020-06-09T05:19:00",12.97474771,77.6060852,"W","Level_0","None","India Coffee House"],
        [1486,"2020-06-09T05:19:00",12.97474092,77.60612992,"W","Level_0","None","India Coffee House"],
        [1487,"2020-06-09T05:19:00",12.97473264,77.60617205,"W","Level_0","None","Church Street"],
        [1488,"2020-06-09T05:19:00",12.97473271,77.60620814,"W","Level_0","None","Church Street"],
        [1489,"2020-06-09T05:19:00",12.97472289,77.60625392,"W","Level_0","None","Church Street"],
        [1490,"2020-06-09T05:19:00",12.97470271,77.60629789,"W","Level_0","None","Church Street"],
        [1491,"2020-06-09T05:19:00",12.97466992,77.60634635,"W","Level_0","None","Church Street"],
        [1492,"2020-06-09T05:19:00",12.97465835,77.60639159,"W","Level_0","None","Church Street"],
        [1493,"2020-06-09T05:19:00",12.97462619,77.60644013,"W","Level_0","None","Church Street"],
        [1494,"2020-06-09T05:19:00",12.97461419,77.60648548,"W","Level_0","None","M G Road Metro Station- Plaza Entrance"],
        [1495,"2020-06-09T05:19:00",12.97460351,77.60653114,"W","Level_0","None","M G Road Metro Station- Plaza Entrance"],
        [1496,"2020-06-09T05:19:00",12.97459355,77.606578,"W","Level_0","None","M G Road Metro Station- Plaza Entrance"],
        [1497,"2020-06-09T05:19:00",12.974583,77.6066221,"W","Level_0","None","M G Road Metro Station- Plaza Entrance"],
        [1498,"2020-06-09T05:19:00",12.97457049,77.60666228,"W","Level_0","None","Church Street"],
        [1499,"2020-06-09T05:19:00",12.97454313,77.60675106,"W","Level_0","None","Church Street"],
        [1500,"2020-06-09T05:19:00",12.97452931,77.60679633,"W","Level_0","None","Church Street"]
    ]
    // 1601-1700
    const records7 = [
        [1601,"2020-06-09T05:07:00",12.97648632,77.60225479,"E","Level_0","None","Mahatma Gandhi Road"],
        [1602,"2020-06-09T05:07:00",12.97652753,77.60220613,"E","Level_0","None","Mahatma Gandhi Road"],
        [1603,"2020-06-09T05:07:00",12.9765473,77.60215486,"E","Level_0","None","Mahatma Gandhi Road"],
        [1604,"2020-06-09T05:07:00",12.97656232,77.60210518,"E","Level_0","None","Mahatma Gandhi Road"],
        [1605,"2020-06-09T05:07:00",12.97657753,77.60206539,"E","Level_0","None","Mahatma Gandhi Road"],
        [1606,"2020-06-09T05:07:00",12.97658486,77.60202561,"E","Level_0","None","Namma Metro Reach-1"],
        [1607,"2020-06-09T05:07:00",12.97659816,77.60199252,"E","Level_0","None","Saint Mark's Road"],
        [1608,"2020-06-09T05:07:00",12.97663425,77.60194638,"S","Level_0","None","Saint Mark's Road"],
        [1609,"2020-06-09T05:07:00",12.97670959,77.60192529,"S","Level_0","None","Saint Mark's Road"],
        [1610,"2020-06-09T05:07:00",12.97674366,77.60193361,"S","Level_0","None","Namma Metro Reach-1"],
        [1611,"2020-06-09T05:07:00",12.97688698,77.60196107,"S","Level_0","None","Namma Metro Reach-1"],
        [1612,"2020-06-09T05:07:00",12.97701905,77.60198896,"S","Level_0","None","Saint Mark's Road"],
        [1613,"2020-06-09T05:07:00",12.97709783,77.60200919,"S","Level_0","None","Saint Mark's Road"],
        [1614,"2020-06-09T05:07:00",12.97716877,77.60202098,"S","Level_0","None","Saint Mark's Road"],
        [1615,"2020-06-09T05:07:00",12.97725653,77.60203785,"S","Level_0","None","Saint Mark's Road"],
        [1616,"2020-06-09T05:07:00",12.97733875,77.6020513,"S","Level_0","None","Saint Mark's Road"],
        [1617,"2020-06-09T05:07:00",12.97741841,77.60206911,"S","Level_0","None","Saint Mark's Road"],
        [1618,"2020-06-09T05:07:00",12.97748062,77.60209076,"S","Level_0","None","Saint Mark's Road"],
        [1619,"2020-06-09T05:07:00",12.9775506,77.6021069,"S","Level_0","None","Saint Mark's Road"],
        [1620,"2020-06-09T05:07:00",12.97763271,77.6021249,"S","Level_0","None","Saint Mark's Road"],
        [1621,"2020-06-09T05:07:00",12.97770566,77.60214233,"S","Level_0","None","Saint Mark's Road"],
        [1622,"2020-06-09T05:07:00",12.97778492,77.60216638,"S","Level_0","None","Saint Mark's Road"],
        [1623,"2020-06-09T05:07:00",12.97786736,77.6021892,"S","Level_0","None","Saint Mark's Road"],
        [1624,"2020-06-09T05:07:00",12.97793632,77.60220166,"S","Level_0","None","Saint Mark's Road"],
        [1625,"2020-06-09T05:07:00",12.97801526,77.60222228,"S","Level_0","None","Saint Mark's Road"],
        [1626,"2020-06-09T05:07:00",12.97807716,77.60223362,"S","Level_0","None","Saint Mark's Road"],
        [1627,"2020-06-09T05:07:00",12.97814528,77.60224115,"S","Level_0","None","Saint Mark's Road"],
        [1628,"2020-06-09T05:07:00",12.97821129,77.60225689,"S","Level_0","None","Saint Mark's Road"],
        [1629,"2020-06-09T05:07:00",12.97827534,77.60227297,"S","Level_0","None","Saint Mark's Road"],
        [1630,"2020-06-09T05:07:00",12.97835246,77.60229441,"S","Level_0","None","Saint Mark's Road"],
        [1631,"2020-06-09T05:07:00",12.97843175,77.60231275,"S","Level_0","None","Saint Mark's Road"],
        [1632,"2020-06-09T05:07:00",12.97850827,77.60233205,"S","Level_0","None","Saint Mark's Road"],
        [1633,"2020-06-09T05:07:00",12.97857985,77.6023445,"S","Level_0","None","Saint Mark's Road"],
        [1634,"2020-06-09T05:07:00",12.97865416,77.60235929,"S","Level_0","None","Saint Mark's Road"],
        [1635,"2020-06-09T05:07:00",12.97872194,77.60237017,"S","Level_0","None","Saint Mark's Road"],
        [1636,"2020-06-09T05:07:00",12.9787951,77.60239376,"S","Level_0","None","Saint Mark's Road"],
        [1637,"2020-06-09T05:07:00",12.97887033,77.60240986,"S","Level_0","None","Saint Mark's Road"],
        [1638,"2020-06-09T05:07:00",12.97893192,77.60241802,"S","Level_0","None","Saint Mark's Road"],
        [1639,"2020-06-09T05:07:00",12.97897468,77.60243562,"S","Level_0","None","Saint Mark's Road"],
        [1640,"2020-06-09T05:07:00",12.9790225,77.60244279,"S","Level_0","None","Saint Mark's Road"],
        [1641,"2020-06-09T05:07:00",12.97906721,77.6024514,"S","Level_0","None","Saint Mark's Road"],
        [1642,"2020-06-09T05:07:00",12.97910149,77.60246843,"W","Level_0","None","Saint Mark's Road"],
        [1643,"2020-06-09T05:07:00",12.97911367,77.6024939,"W","Level_0","None","Saint Mark's Road"],
        [1644,"2020-06-09T05:07:00",12.97912194,77.60253288,"W","Level_0","None","Cubbon Road"],
        [1645,"2020-06-09T05:07:00",12.97911127,77.60257633,"W","Level_0","None","Cubbon Road"],
        [1646,"2020-06-09T05:07:00",12.97909439,77.60263176,"W","Level_0","None","Cubbon Road"],
        [1647,"2020-06-09T05:07:00",12.97903502,77.60283337,"W","Level_0","None","Cubbon Road"],
        [1648,"2020-06-09T05:07:00",12.97901468,77.60290594,"W","Level_0","None","Cubbon Road"],
        [1649,"2020-06-09T05:07:00",12.97899707,77.60297857,"W","Level_0","None","Cubbon Road"],
        [1650,"2020-06-09T05:07:00",12.97897787,77.60305692,"W","Level_0","None","Cubbon Road"],
        [1651,"2020-06-09T05:07:00",12.97895602,77.60313679,"W","Level_0","None","Cubbon Road"],
        [1652,"2020-06-09T05:07:00",12.97894891,77.60321585,"W","Level_0","None","Cubbon Road"],
        [1653,"2020-06-09T05:06:00",12.97892601,77.60329336,"W","Level_0","None","Lady Curzon Road"],
        [1654,"2020-06-09T05:06:00",12.97888454,77.60337143,"W","Level_0","None","Lady Curzon Road"],
        [1655,"2020-06-09T05:06:00",12.9788581,77.60345136,"W","Level_0","None","Cubbon Road"],
        [1656,"2020-06-09T05:06:00",12.97882842,77.60353118,"W","Level_0","None","Cubbon Road"],
        [1657,"2020-06-09T05:06:00",12.97880946,77.60361787,"W","Level_0","None","Cubbon Road"],
        [1658,"2020-06-09T05:06:00",12.97877714,77.60370059,"W","Level_0","None","Cubbon Road"],
        [1659,"2020-06-09T05:06:00",12.97874892,77.6037779,"W","Level_0","None","Cubbon Road"],
        [1660,"2020-06-09T05:06:00",12.97872101,77.60385959,"W","Level_0","None","Cubbon Road"],
        [1661,"2020-06-09T05:06:00",12.97869233,77.6039433,"W","Level_0","None","Cubbon Road"],
        [1662,"2020-06-09T05:06:00",12.97866457,77.60402038,"W","Level_0","None","Cubbon Road"],
        [1663,"2020-06-09T05:06:00",12.97863822,77.6040971,"W","Level_0","None","Cubbon Road"],
        [1664,"2020-06-09T05:06:00",12.97860991,77.60417721,"W","Level_0","None","Cubbon Road"],
        [1665,"2020-06-09T05:06:00",12.9785687,77.60433545,"W","Level_0","None","Cubbon Road"],
        [1666,"2020-06-09T05:06:00",12.97854314,77.60441185,"W","Level_0","None","Cubbon Road"],
        [1667,"2020-06-09T05:06:00",12.97851786,77.6044902,"W","Level_0","None","Cubbon Road"],
        [1668,"2020-06-09T05:06:00",12.97849652,77.60456884,"W","Level_0","None","Cubbon Road"],
        [1669,"2020-06-09T05:06:00",12.97846373,77.60464685,"W","Level_0","None","Cubbon Road"],
        [1670,"2020-06-09T05:06:00",12.97843927,77.60472976,"W","Level_0","None","Cubbon Road"],
        [1671,"2020-06-09T05:06:00",12.97841154,77.60481094,"W","Level_0","None","Cubbon Road"],
        [1672,"2020-06-09T05:06:00",12.97838805,77.60488769,"W","Level_0","None","Cubbon Road"],
        [1673,"2020-06-09T05:06:00",12.97836354,77.60496659,"W","Level_0","None","Cubbon Road"],
        [1674,"2020-06-09T05:06:00",12.97834495,77.60504439,"W","Level_0","None","Cubbon Road"],
        [1675,"2020-06-09T05:06:00",12.97832089,77.60512084,"W","Level_0","None","Cubbon Road"],
        [1676,"2020-06-09T05:06:00",12.97829288,77.60520067,"W","Level_0","None","Cubbon Road"],
        [1677,"2020-06-09T05:06:00",12.97827091,77.60527891,"W","Level_0","None","Cubbon Road"],
        [1678,"2020-06-09T05:06:00",12.97824435,77.60535773,"W","Level_0","None","Cubbon Road"],
        [1679,"2020-06-09T05:06:00",12.97821828,77.60543517,"W","Level_0","None","Cubbon Road"],
        [1680,"2020-06-09T05:06:00",12.9781885,77.60551398,"W","Level_0","None","Cubbon Road"],
        [1681,"2020-06-09T05:06:00",12.97815886,77.60559314,"W","Level_0","None","Cubbon Road"],
        [1682,"2020-06-09T05:06:00",12.97813433,77.60567493,"W","Level_0","None","Cubbon Road"],
        [1683,"2020-06-09T05:06:00",12.97810705,77.60575246,"W","Level_0","None","Cubbon Road"],
        [1684,"2020-06-09T05:06:00",12.97808084,77.60582785,"W","Level_0","None","Cubbon Road"],
        [1685,"2020-06-09T05:06:00",12.97805306,77.60590976,"W","Level_0","None","Cubbon Road"],
        [1686,"2020-06-09T05:06:00",12.9780274,77.60598241,"W","Level_0","None","Cubbon Road"],
        [1687,"2020-06-09T05:06:00",12.97800396,77.60605873,"W","Level_0","None","Cubbon Road"],
        [1688,"2020-06-09T05:06:00",12.97797459,77.60613182,"W","Level_0","None","Cubbon Road"],
        [1689,"2020-06-09T05:06:00",12.97795459,77.60620217,"W","Level_0","None","Cubbon Road"],
        [1690,"2020-06-09T05:06:00",12.97793217,77.60626947,"W","Level_0","None","Cubbon Road"],
        [1691,"2020-06-09T05:06:00",12.97791202,77.60633934,"W","Level_0","None","Cubbon Road"],
        [1692,"2020-06-09T05:06:00",12.97789334,77.60640759,"W","Level_0","None","Cubbon Road"],
        [1693,"2020-06-09T05:06:00",12.97786892,77.60647852,"W","Level_0","None","Cubbon Road"],
        [1694,"2020-06-09T05:06:00",12.97784521,77.60654951,"W","Level_0","None","Cubbon Road"],
        [1695,"2020-06-09T05:06:00",12.97782477,77.60661514,"W","Level_0","None","Main Guard Cross Road"],
        [1696,"2020-06-09T05:06:00",12.97780031,77.60668325,"W","Level_0","None","Main Guard Cross Road"],
        [1697,"2020-06-09T05:06:00",12.9777809,77.60674355,"W","Level_0","None","Main Guard Cross Road"],
        [1698,"2020-06-09T05:06:00",12.97776236,77.60680745,"W","Level_0","None","Cubbon Road"],
        [1699,"2020-06-09T05:06:00",12.97773648,77.60687804,"W","Level_0","None","Cubbon Road"],
        [1700,"2020-06-09T05:06:00",12.97771158,77.60694595,"W","Level_0","None","Cubbon Road"]
    ]
    // 2301-2400
    const records8 = [
        [2301,"2020-06-09T05:04:00",12.97533182,77.61411806,"W","Level_0","None","Cubbon Road"],
        [2302,"2020-06-09T05:04:00",12.97531201,77.61417652,"W","Level_0","None","Dickenson Road"],
        [2303,"2020-06-09T05:04:00",12.97529263,77.6142535,"W","Level_0","None","Dickenson Road"],
        [2304,"2020-06-09T05:04:00",12.97528038,77.61429959,"W","Level_0","None","Cubbon Road"],
        [2305,"2020-06-09T05:04:00",12.9752822,77.61433738,"W","Level_0","None","Cubbon Road"],
        [2306,"2020-06-09T05:04:00",12.97529811,77.61436139,"S","Level_0","None","Cubbon Road"],
        [2307,"2020-06-09T05:04:00",12.97531428,77.61438564,"S","Level_0","None","Cubbon Road"],
        [2308,"2020-06-09T05:04:00",12.97533736,77.61436932,"S","Level_0","None","Cubbon Road"],
        [2309,"2020-06-09T05:04:00",12.97535643,77.61433948,"E","Level_0","None","Dickenson Road"],
        [2310,"2020-06-09T05:04:00",12.97537507,77.61431253,"E","Level_0","None","Dickenson Road"],
        [2311,"2020-06-09T05:04:00",12.97539447,77.61428507,"E","Level_0","None","Dickenson Road"],
        [2312,"2020-06-09T05:04:00",12.97541164,77.6142454,"E","Level_0","None","Dickenson Road"],
        [2313,"2020-06-09T05:04:00",12.97543434,77.61419333,"E","Level_0","None","Dickenson Road"],
        [2314,"2020-06-09T05:04:00",12.97544074,77.61414988,"E","Level_0","None","Cubbon Road"],
        [2315,"2020-06-09T05:04:00",12.97545755,77.6141093,"E","Level_0","None","Cubbon Road"],
        [2316,"2020-06-09T05:04:00",12.97546793,77.61406085,"E","Level_0","None","Cubbon Road"],
        [2317,"2020-06-09T05:04:00",12.97547996,77.61401654,"E","Level_0","None","Cubbon Road"],
        [2318,"2020-06-09T05:04:00",12.9754909,77.61395374,"E","Level_0","None","Cubbon Road"],
        [2319,"2020-06-09T05:04:00",12.97550762,77.61389223,"E","Level_0","None","Cubbon Road"],
        [2320,"2020-06-09T05:04:00",12.97552093,77.6138283,"E","Level_0","None","Cubbon Road"],
        [2321,"2020-06-09T05:04:00",12.97554622,77.61378742,"E","Level_0","None","Cubbon Road"],
        [2322,"2020-06-09T05:03:00",12.97555898,77.61375939,"E","Level_0","None","Cubbon Road"],
        [2323,"2020-06-09T05:02:00",12.97557273,77.61373198,"E","Level_0","None","Cubbon Road"],
        [2324,"2020-06-09T05:02:00",12.97558409,77.61370588,"E","Level_0","None","Cubbon Road"],
        [2325,"2020-06-09T05:02:00",12.97560094,77.61365281,"E","Level_0","None","Cubbon Road"],
        [2326,"2020-06-09T05:02:00",12.97562114,77.61359215,"E","Level_0","None","Cubbon Road"],
        [2327,"2020-06-09T05:02:00",12.97564609,77.61353528,"E","Level_0","None","Cubbon Road"],
        [2328,"2020-06-09T05:02:00",12.97566929,77.61348045,"E","Level_0","None","Cubbon Road"],
        [2329,"2020-06-09T05:02:00",12.97568781,77.61341487,"E","Level_0","None","Cubbon Road"],
        [2330,"2020-06-09T05:02:00",12.97571001,77.61334655,"E","Level_0","None","Cubbon Road"],
        [2331,"2020-06-09T05:02:00",12.97573448,77.61327821,"E","Level_0","None","Cubbon Road"],
        [2332,"2020-06-09T05:02:00",12.97575805,77.61320885,"E","Level_0","None","Cubbon Road"],
        [2333,"2020-06-09T05:02:00",12.97578314,77.61313113,"E","Level_0","None","Cubbon Road"],
        [2334,"2020-06-09T05:02:00",12.97580629,77.61305489,"E","Level_0","None","Cubbon Road"],
        [2335,"2020-06-09T05:02:00",12.97582433,77.61298715,"E","Level_0","None","Manipal Center"],
        [2336,"2020-06-09T05:02:00",12.97584471,77.61291221,"E","Level_0","None","Manipal Center"],
        [2337,"2020-06-09T05:02:00",12.97587084,77.61283224,"E","Level_0","None","Manipal Center"],
        [2338,"2020-06-09T05:02:00",12.97589727,77.61275327,"E","Level_0","None","Cubbon Road"],
        [2339,"2020-06-09T05:02:00",12.97592542,77.61267315,"E","Level_0","None","Cubbon Road"],
        [2340,"2020-06-09T05:02:00",12.97595572,77.61259804,"E","Level_0","None","Cubbon Road"],
        [2341,"2020-06-09T05:02:00",12.97598256,77.61252312,"E","Level_0","None","Cubbon Road"],
        [2342,"2020-06-09T05:02:00",12.97600507,77.6124451,"E","Level_0","None","Cubbon Road"],
        [2343,"2020-06-09T05:02:00",12.97603266,77.61236824,"E","Level_0","None","Cubbon Road"],
        [2344,"2020-06-09T05:02:00",12.9760565,77.61228212,"E","Level_0","None","Cubbon Road"],
        [2345,"2020-06-09T05:02:00",12.97608269,77.61220056,"E","Level_0","None","Cubbon Road"],
        [2346,"2020-06-09T05:02:00",12.97610901,77.61213119,"E","Level_0","None","Cubbon Road"],
        [2347,"2020-06-09T05:02:00",12.9761319,77.61205558,"E","Level_0","None","Cubbon Road"],
        [2348,"2020-06-09T05:02:00",12.97615696,77.61198051,"E","Level_0","None","Cubbon Road"],
        [2349,"2020-06-09T05:02:00",12.97618117,77.611908,"E","Level_0","None","Cubbon Road"],
        [2350,"2020-06-09T05:02:00",12.97620477,77.61183183,"E","Level_0","None","Cubbon Road"],
        [2351,"2020-06-09T05:02:00",12.97623131,77.61175338,"E","Level_0","None","Cubbon Road"],
        [2352,"2020-06-09T05:02:00",12.97625784,77.61168378,"E","Level_0","None","Cubbon Road"],
        [2353,"2020-06-09T05:02:00",12.97628474,77.61160828,"E","Level_0","None","Cubbon Road"],
        [2354,"2020-06-09T05:02:00",12.97631421,77.61153773,"E","Level_0","None","Cubbon Road"],
        [2355,"2020-06-09T05:02:00",12.97634408,77.61146063,"E","Level_0","None","Cubbon Road"],
        [2356,"2020-06-09T05:02:00",12.97637212,77.61138696,"E","Level_0","None","Cubbon Road"],
        [2357,"2020-06-09T05:02:00",12.97639901,77.61131443,"E","Level_0","None","Cubbon Road"],
        [2358,"2020-06-09T05:02:00",12.97642526,77.61123196,"E","Level_0","None","Cubbon Road"],
        [2359,"2020-06-09T05:02:00",12.97645162,77.61114797,"E","Level_0","None","Cubbon Road"],
        [2360,"2020-06-09T05:02:00",12.97647834,77.61106724,"E","Level_0","None","Cubbon Road"],
        [2361,"2020-06-09T05:02:00",12.97650835,77.61098379,"E","Level_0","None","Cubbon Road"],
        [2362,"2020-06-09T05:02:00",12.97653283,77.61090599,"E","Level_0","None","Cubbon Road"],
        [2363,"2020-06-09T05:02:00",12.97655256,77.61081071,"E","Level_0","None","Cubbon Road"],
        [2364,"2020-06-09T05:02:00",12.97658249,77.61071991,"E","Level_0","None","Cubbon Road"],
        [2365,"2020-06-09T05:02:00",12.97660953,77.61065666,"E","Level_0","None","Cubbon Road"],
        [2366,"2020-06-09T05:02:00",12.97666257,77.61049858,"E","Level_0","None","Cubbon Road"],
        [2367,"2020-06-09T05:02:00",12.97668826,77.61041251,"E","Level_0","None","Cubbon Road"],
        [2368,"2020-06-09T05:02:00",12.97671538,77.61032649,"E","Level_0","None","Cubbon Road"],
        [2369,"2020-06-09T05:02:00",12.97674118,77.61024254,"E","Level_0","None","Cubbon Road"],
        [2370,"2020-06-09T05:02:00",12.97677046,77.61016119,"E","Level_0","None","Cubbon Road"],
        [2371,"2020-06-09T05:02:00",12.97680015,77.6100771,"E","Level_0","None","Cubbon Road"],
        [2372,"2020-06-09T05:02:00",12.97682656,77.60998813,"E","Level_0","None","Cubbon Road"],
        [2373,"2020-06-09T05:02:00",12.97684748,77.60991462,"E","Level_0","None","Cubbon Road"],
        [2374,"2020-06-09T05:02:00",12.976875,77.60983072,"E","Level_0","None","Cubbon Road"],
        [2375,"2020-06-09T05:02:00",12.9769014,77.60975442,"E","Level_0","None","Cubbon Road"],
        [2376,"2020-06-09T05:02:00",12.97692992,77.60967468,"E","Level_0","None","Cubbon Road"],
        [2377,"2020-06-09T05:02:00",12.97695648,77.60959697,"E","Level_0","None","Cubbon Road"],
        [2378,"2020-06-09T05:01:00",12.97703014,77.60936222,"E","Level_0","None","Cubbon Road"],
        [2379,"2020-06-09T05:01:00",12.97705443,77.60928635,"E","Level_0","None","Cubbon Road"],
        [2380,"2020-06-09T05:01:00",12.97707875,77.60921479,"E","Level_0","None","Cubbon Road"],
        [2381,"2020-06-09T05:01:00",12.97710211,77.60914274,"E","Level_0","None","Cubbon Road"],
        [2382,"2020-06-09T05:01:00",12.97712411,77.60907624,"E","Level_0","None","Cubbon Road"],
        [2383,"2020-06-09T05:01:00",12.97715626,77.60895072,"E","Level_0","None","Cubbon Road"],
        [2384,"2020-06-09T05:01:00",12.97717515,77.60889555,"E","Level_0","None","Cubbon Road"],
        [2385,"2020-06-09T05:01:00",12.97719186,77.60884437,"E","Level_0","None","Cubbon Road"],
        [2386,"2020-06-09T05:01:00",12.97720679,77.60880042,"E","Level_0","None","Cubbon Road"],
        [2387,"2020-06-09T05:01:00",12.97721523,77.60875726,"E","Level_0","None","Cubbon Road"],
        [2388,"2020-06-09T05:01:00",12.97722727,77.60871837,"E","Level_0","None","Cubbon Road"],
        [2389,"2020-06-09T05:01:00",12.97725275,77.60863307,"E","Level_0","None","Kamaraj Road"],
        [2390,"2020-06-09T05:01:00",12.97726428,77.60859051,"E","Level_0","None","Kamaraj Road"],
        [2391,"2020-06-09T05:01:00",12.97727631,77.60854438,"E","Level_0","None","Kamaraj Road"],
        [2392,"2020-06-09T05:01:00",12.97729528,77.60849616,"E","Level_0","None","Cubbon Road"],
        [2393,"2020-06-09T05:01:00",12.97730713,77.60845665,"E","Level_0","None","Cubbon Road"],
        [2394,"2020-06-09T05:01:00",12.97731775,77.60842535,"E","Level_0","None","Cubbon Road"],
        [2395,"2020-06-09T05:01:00",12.9773307,77.60839949,"E","Level_0","None","Cubbon Road"],
        [2396,"2020-06-09T05:01:00",12.97734859,77.60834733,"E","Level_0","None","Cubbon Road"],
        [2397,"2020-06-09T05:01:00",12.97736661,77.60831722,"E","Level_0","None","Cubbon Road"],
        [2398,"2020-06-09T05:01:00",12.97738116,77.60828448,"E","Level_0","None","Cubbon Road"],
        [2399,"2020-06-09T05:01:00",12.97739658,77.60824397,"E","Level_0","None","Cubbon Road"],
        [2400,"2020-06-09T05:01:00",12.97741574,77.60819693,"E","Level_0","None","Cubbon Road"]
    ]
    

    let currentIndex = 0;
    const timeInterval = 1000; // 1 second

    function updateAllMarkers() {
      // Update marker positions based on your data
      function updateAllMarkers() {
        const [, , latitude1, longitude1] = records1[currentIndex];
        marker1.setLatLng([latitude1, longitude1]);
    
        const [, , latitude2, longitude2] = records2[currentIndex];
        marker2.setLatLng([latitude2, longitude2]);
    
        const [, , latitude3, longitude3] = records3[currentIndex];
        marker3.setLatLng([latitude3, longitude3]);
    
        const [, , latitude4, longitude4] = records4[currentIndex];
        marker4.setLatLng([latitude4, longitude4]);
    
        const [, , latitude5, longitude5] = records5[currentIndex];
        marker5.setLatLng([latitude5, longitude5]);
    
        const [, , latitude6, longitude6] = records6[currentIndex];
        marker6.setLatLng([latitude6, longitude6]);
    
        const [, , latitude7, longitude7] = records7[currentIndex];
        marker7.setLatLng([latitude7, longitude7]);
    
        const [, , latitude8, longitude8] = records8[currentIndex];
        marker8.setLatLng([latitude8, longitude8]);
    }
    }

    function updateAllMarkersPeriodically() {
      updateAllMarkers();
      currentIndex = (currentIndex + 1) % 100;
    }

    // Initial update
    updateAllMarkersPeriodically();

    // Set an interval to update the marker every 5 seconds
    setInterval(updateAllMarkersPeriodically, timeInterval);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(updateAllMarkersPeriodically);
    };
  }, []);

  return (
    <div>
      {showFleetManagerForm && (
          <div>
            <div className="min-h-screen flex items-center justify-center">
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-screen-md">
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 text-center mb-4">
                  Fleet Manager Login Page
                </h1>
                <form className="space-y-4" onSubmit={FMformSubmissionHandler}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={emailInputClasses}
                      placeholder="Email@company.com"
                      required
                      value={enteredEmail}
                      onChange={emailInputChangeHandler}
                      onBlur={emailInputBlurHandler}
                    />
                    {!enteredEmailIsValid && enteredEmailTouched && (
                      <p className="error-text">Email must not be empty.</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className={passwordInputClasses}
                      placeholder="••••••••"
                      required
                      value={enteredPassword}
                      onChange={passwordInputChangeHandler}
                      onBlur={passwordInputBlurHandler}
                    />
                    {!enteredPasswordIsValid && enteredPasswordTouched && (
                      <p className="error-text">Authentication problem.</p>
                    )}
                  </div>
                  <div className="flex items-start mb-4">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <button
                    className="min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
                    disabled={!formIsValid}
                  >
                    Login
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        )}
      <div id="map" style={{ height: '400px' }}></div>
    </div>
  );
}


