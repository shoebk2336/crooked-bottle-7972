import Carousel from "./Carosel"
import { HStack, Image } from "@chakra-ui/react"


//first
let card1 = [
    {
      title: 'Fusion',
      image:'https://assets.ajio.com/cms/AJIO/WEB/22012023-UHP-D-TopBanner-P6-Winterwear-GAP-Upto25.jpg'
    },
    {
      title: 'Fusion',
   image:"https://assets.ajio.com/cms/AJIO/WEB/22012023-UHP-D-DailyBanner-P2-UpgradeYourJacketsCollection-FortCollinsUSPA-4060.jpg"
        
    
    },
    {
      title: 'Fusion',
      image:'https://assets.ajio.com/cms/AJIO/WEB/22012023-UHP-D-DailyBanner-P4-BeingHuman-Min60.jpg'
     
    },
  ];
  let card2=[
    {image:'https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-payupto3AJIOpoints.jpg'},
    {image:'https://assets.ajio.com/cms/AJIO/WEB/1440x128--FB.jpg'},
    {image:'https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-relianceone.jpg'},
    {image:'https://assets.ajio.com/cms/AJIO/WEB/1440x128--FB.jpg'},



  ];
  let card3=[
    {image:'https://assets.ajio.com/cms/AJIO/WEB/21012023-UHP-D-26Hrs-P3-Winterwear-USPAISceneryVeroModa-Flat70.jpg'},
    {image:'https://assets.ajio.com/cms/AJIO/WEB/21012023-UHP-D-26Hrs-P1-SteveMadden-Flat40.jpg'},
    {image:'https://assets.ajio.com/cms/AJIO/WEB/21012023-UHP-D-26Hrs-P4-HomeExpressions=Upto70Extra5.jpg'},
    {image:'https://assets.ajio.com/cms/AJIO/WEB/21012023-UHP-D-26Hrs-P2-Ketch-Flat65.jpg'},



  ];
//   let card3=[
//     {image:''},
//     {image:''},
//     {image:''},
//     {image:''},



//   ];
//   let card3=[
//     {image:''},
//     {image:''},
//     {image:''},
//     {image:''},



//   ];
//   let card3=[
//     {image:''},
//     {image:''},
//     {image:''},
//     {image:''},



//   ];
//   let card3=[
//     {image:''},
//     {image:''},
//     {image:''},
//     {image:''},



//   ];
//   let card3=[
//     {image:''},
//     {image:''},
//     {image:''},
//     {image:''},



//   ];




const Home=()=>{
    return (

        <>
        
    
    <hr/>
    <Carousel cards={[card1]}/>
    <HStack mt={"-200"} spacing={'0'} w={"448px"} >
      <Image  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-trends.jpg"/>
      <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-indie.jpg"/>
      <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-home.jpg"/>
      </HStack>

        <Image src='ionHeaderStripkjkf.gif'/>
        
        <Image mt={'-200'} src='https://assets.ajio.com/cms/AJIO/WEB/Earlybird-Strip-D-1440x128%20(1).gif'/>
      
      <HStack spacing={'0'} w={"337.2px"}>
      <Image  src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-jewellery.jpg'/>
      <Image  src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-sarees.jpg'/>
      <Image  src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-ethnicwear.jpg'/>
      <Image  src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-handbags.jpg'/>
      
      </HStack>
        <HStack w={'443px'}>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-wedding.jpg"/>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-sarees.jpg"/>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-watches.jpg"/>
        
        
        </HStack>
       <Image mt={'-200'} src="https://assets.ajio.com/cms/AJIO/WEB/D-HeroDeals-SectionHeaderStripkjkf.gif"/>
       <Carousel cards={[card3]}/>
       <Image mt={"-200"} src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Fashionation-Coupon-header.gif"/>
       <HStack w={"444px"} >
       <Image  src='https://assets.ajio.com/cms/AJIO/WEB/D-Extra30-480x6001.gif'/>
       <Image  src='https://assets.ajio.com/cms/AJIO/WEB/D-1950-480x6001.gif'/>
       <Image  src='https://assets.ajio.com/cms/AJIO/WEB/D-FootwearFiesta-480x6001.gif'/>
       </HStack>
       <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-gamesonze-scratchcard-GIF.gif"/>
       <HStack spacing={'0'} w={"448px"}>
       <Image  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-shopearn5cashback.jpg"/>
       <Image  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-relianceone.jpg"/>
       <Image  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-referearn1500.jpg"/>
       
       </HStack>
       <Image  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-header.jpg"/>
      <Image src='https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stores%20(D)111.jpg'/>
       </>
    )
    
}
export default Home