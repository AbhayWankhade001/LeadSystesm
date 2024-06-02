const nodemailer = require('nodemailer');
// const fs = require('fs').promises;
// const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// const ClientEmails = require('../Model/ClientEmails');

const emailSubject =
    "Explore Exciting Freelance Web Development Services with Us!";
const emailBody = `Dear Prospective Client,

On behalf of ArtizzDev, a premier web development company dedicated to providing outstanding digital solutions catered to your particular requirements, I'm Abhay Wankhede, and I'm a representative of our knowledgeable and proficient team.

At ArtizzDev, we're here to help you build a strong online presence and grow your brand. We offer website development using platforms like WordPress, Webflow, and Shopify, as well as app development with Angular and React Native.

But that's not all – we also provide digital marketing services to boost your brand's visibility. From SEO and social media management to PPC advertising and content marketing, we've got you covered.

Plus, our graphic design team will ensure your brand looks its best across all channels.

Our commitment to quality extends to our pricing model, which is designed to offer you the most competitive rates in the market. Whether you prefer hourly, monthly, or yearly billing cycles, we ensure transparency and affordability in all our engagements.

If you're interested in learning more about how ArtizzDev can help you achieve your digital goals, please don't hesitate to reach out to us. You can contact us via WhatsApp at +91 9322066516 or email us at official@artizz.in.

Thank you for considering ArtizzDev as your digital partner. We look forward to the opportunity to collaborate with you and help you take your brand to new heights.

Best regards,

Abhay Wankhede
ArtizzDev
`;

const Htm1 = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Fraunces:ital,wght@0,400;0,700" rel="stylesheet" />
 <link href="https://fonts.googleapis.com/css?family=Rubik:ital,wght@0,400;0,400;0,500;0,600" rel="stylesheet" />
 <title>David Shye</title>
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         div[style*="margin: 14px 0"],
         div[style*="margin: 16px 0"] {
             margin: 0 !important;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: none;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
 
         .pc-gmail-fix {
             display: none;
             display: none !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-fontSize-26px {font-size: 26px !important;}
 table.pc-w620-spacing-0-0-20-0 {margin: 0px 0px 20px 0px !important;}
 td.pc-w620-spacing-0-0-20-0,th.pc-w620-spacing-0-0-20-0{margin: 0 !important;padding: 0px 0px 20px 0px !important;}
 .pc-w620-width-auto {width: auto !important;}
 .pc-w620-height-auto {height: auto !important;}
 .pc-w620-fontSize-16px {font-size: 16px !important;}
 .pc-w620-fontSize-25px {font-size: 25px !important;}
 .pc-w620-lineHeight-140pc {line-height: 140% !important;}
 .pc-w620-lineHeight-150pc {line-height: 150% !important;}
 table.pc-w620-spacing-0-0-16-0 {margin: 0px 0px 16px 0px !important;}
 td.pc-w620-spacing-0-0-16-0,th.pc-w620-spacing-0-0-16-0{margin: 0 !important;padding: 0px 0px 16px 0px !important;}
 .pc-w620-padding-0-16-0-16 {padding: 0px 16px 0px 16px !important;}
 .pc-w620-width-340 {width: 340px !important;}
 div.pc-w620-textAlign-center,th.pc-w620-textAlign-center,a.pc-w620-textAlign-center,td.pc-w620-textAlign-center {text-align: center !important;text-align-last: center !important;}
 table.pc-w620-textAlign-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-textAlign-center {margin-right: auto !important;margin-left: auto !important;}
 table.pc-w620-spacing-0-0-28-0 {margin: 0px 0px 28px 0px !important;}
 td.pc-w620-spacing-0-0-28-0,th.pc-w620-spacing-0-0-28-0{margin: 0 !important;padding: 0px 0px 28px 0px !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-padding-12-0-10-0 {padding: 12px 0px 10px 0px !important;}
 .pc-w620-width-135 {width: 135px !important;}
 .pc-w620-width-hug {width: auto !important;}
 .pc-w620-padding-12-20-10-20 {padding: 12px 20px 10px 20px !important;}
 .pc-w620-padding-30-0-24-0 {padding: 30px 0px 24px 0px !important;}
 .pc-w620-itemsSpacings-0-30 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
 .pc-w620-fontSize-28px {font-size: 28px !important;}
 .pc-w620-fontSize-13px {font-size: 13px !important;}
 .pc-w620-itemsSpacings-0-12 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 6px !important;padding-bottom: 6px !important;}
 .pc-w620-fontSize-14px {font-size: 14px !important;}
 .pc-w620-padding-12-24-12-24 {padding: 12px 24px 12px 24px !important;}
 .pc-w620-itemsSpacings-0-20 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 10px !important;padding-bottom: 10px !important;}
 table.pc-w620-spacing-0-0-32-0 {margin: 0px 0px 32px 0px !important;}
 td.pc-w620-spacing-0-0-32-0,th.pc-w620-spacing-0-0-32-0{margin: 0 !important;padding: 0px 0px 32px 0px !important;}
 .pc-w620-valign-middle {vertical-align: middle !important;}
 td.pc-w620-halign-center {text-align: center !important;}
 table.pc-w620-halign-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-halign-center {margin-right: auto !important;margin-left: auto !important;}
 div.pc-w620-align-center,th.pc-w620-align-center,a.pc-w620-align-center,td.pc-w620-align-center {text-align: center !important;text-align-last: center !important;}
 table.pc-w620-align-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-align-center {margin-right: auto !important;margin-left: auto !important;}
 .pc-w620-fontSize-16 {font-size: 16px !important;}
 .pc-w620-lineHeight-26 {line-height: 26px !important;}
 .pc-w620-itemsSpacings-8-30 {padding-left: 4px !important;padding-right: 4px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
 .pc-w620-padding-30-24-30-24 {padding: 30px 24px 30px 24px !important;}
 div.pc-w620-align-left,th.pc-w620-align-left,a.pc-w620-align-left,td.pc-w620-align-left {text-align: left !important;text-align-last: left !important;}
 table.pc-w620-align-left{float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-align-left{margin-right: auto !important;margin-left: 0 !important;}
 .pc-w620-itemsSpacings-0-16 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 8px !important;padding-bottom: 8px !important;}
 .pc-w620-itemsSpacings-12-30 {padding-left: 6px !important;padding-right: 6px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
 td.pc-w620-halign-left {text-align: left !important;}
 table.pc-w620-halign-left {float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-halign-left {margin-right: auto !important;margin-left: 0 !important;}
 .pc-w620-padding-30-28-30-28 {padding: 30px 28px 30px 28px !important;}
 .pc-w620-itemsSpacings-0-40 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 20px !important;padding-bottom: 20px !important;}
 .pc-w620-padding-0-28-0-28 {padding: 0px 28px 0px 28px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @media all { @font-face { font-family: 'Fraunces'; font-style: normal; font-weight: 700; src: url('https://fonts.gstatic.com/s/fraunces/v31/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIcUByTB_7V.woff') format('woff'), url('https://fonts.gstatic.com/s/fraunces/v31/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIcUByTB_7T.woff2') format('woff2'); } @font-face { font-family: 'Rubik'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FWUUz.woff') format('woff'), url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FWUU1.woff2') format('woff2'); } @font-face { font-family: 'Rubik'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUUz.woff') format('woff'), url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1.woff2') format('woff2'); } @font-face { font-family: 'Rubik'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYiFWUUz.woff') format('woff'), url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYiFWUU1.woff2') format('woff2'); } }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #5ba183;" bgcolor="#5ba183">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color:#5ba183; will-change: transform" bgcolor="#5ba183" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" style="width: 600px; max-width: 600px;" width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0px 0px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Header -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-30-0-24-0" style="padding: 40px 0px 40px 0px; border-radius: 0px; background-color: #000000;" bgcolor="#000000">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 24px 0px;">
                   <img src="https://artizz.store/static/media/Artizz_Dev_Bg_Removed.e76bdf2889b54b099742.png" class="" width="50" height="51" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:50px; height: auto; max-width: 100%; border-radius: 58px 58px 58px 58px; box-shadow: 3px 3px 22px 0px rgba(255,184,0,0.34);" />
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 20px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="center" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center" style="padding: 0px 0px 0px 0px;">
                      <div class="pc-font-alt pc-w620-fontSize-26px" style="line-height: 100%; letter-spacing: -0.04em; font-family: 'Fraunces', Arial, Helvetica, sans-serif; font-size: 31px; font-weight: bold; font-variant-ligatures: normal; color: #febb20; text-align: center; text-align-last: center;">
                       <div><span>ArtizzDev</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-20-0" align="center" valign="top" style="padding: 0px 0px 28px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center" style="padding: 0px 0px 0px 0px;">
                      <div class="pc-font-alt pc-w620-fontSize-16px" style="line-height: 100%; letter-spacing: -0.6px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #fea30b; text-align: center; text-align-last: center;">
                       <div><span style="font-weight: 400;font-style: normal;">— Hi there, This is AbhayWankhade from ArtizzDev </span><span> 👋</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 10px 0px 16px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center" style="padding: 0px 40px 0px 40px;">
                      <div class="pc-font-alt pc-w620-fontSize-25px pc-w620-lineHeight-140pc" style="line-height: 100%; letter-spacing: -0.04em; font-family: 'Fraunces', Arial, Helvetica, sans-serif; font-size: 52px; font-weight: bold; font-variant-ligatures: normal; color: #26382a; text-align: center; text-align-last: center;">
                       <div><span style="font-weight: 400;font-style: normal;color: rgb(236, 236, 236);">Digital Solutions Architect & Innovative Creator at Your Service</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-16-0" align="center" valign="top" style="padding: 0px 0px 24px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-340" width="100%" align="center" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-16-0-16" align="center" style="padding: 0px 40px 0px 40px;">
                      <div class="pc-font-alt pc-w620-fontSize-16px pc-w620-lineHeight-150pc" style="line-height: 156%; letter-spacing: -0.3px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 17px; font-weight: normal; font-variant-ligatures: normal; color: #ffffffb3; text-align: center; text-align-last: center;">
                       <div><span>An innovative software design and creative development agency based in Mumbai, India, dedicated to crafting impactful digital solutions.</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-16-0 pc-w620-textAlign-center" align="center" valign="top" style="padding: 0px 0px 24px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-340 pc-w620-textAlign-center" width="100%" align="center" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-16-0-16 pc-w620-textAlign-center" align="center" style="padding: 0px 40px 0px 40px;">
                      <div class="pc-font-alt pc-w620-textAlign-center pc-w620-fontSize-16px pc-w620-lineHeight-150pc" style="line-height: 156%; letter-spacing: -0.3px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 17px; font-weight: normal; font-variant-ligatures: normal; color: #ffffffb3; text-align: center; text-align-last: center;">
                       <div><span>Connect Us At</span>
                       </div>
                       <div><span>Email:- official@artizz.in</span>
                       </div>
                       <div><span>phone:- +919322066516</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-28-0" align="center" style="padding: 0px 0px 28px 0px;">
                   <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first" valign="top" style="padding-top: 0px; padding-right: 6px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="top">
                         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <th valign="top" class="pc-w620-spacing-0-0-0-0" align="center" style="padding: 0px 0px 0px 0px; text-align: center; font-weight: normal; line-height: 1;">
                               <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-135" align="center" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 30px 30px 30px 30px; background-color: #0b251b; text-align:center; color: #ffffff; padding: 15px 20px 15px 20px; mso-padding-left-alt: 0; margin-left:20px;" bgcolor="#0b251b">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 100%; letter-spacing: -0.6px; text-align: center; color: #ffffff;" href="https://api.whatsapp.com/send?phone=+919322066516&text=Hello%20from%20ArtizzDev" target="_blank">Chat Us</a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                               <!--[if !mso]><!-- -->
                               <a class="pc-w620-width-135" style="display: inline-block; box-sizing: border-box; border-radius: 30px 30px 30px 30px; background-color: #0b251b; padding: 15px 20px 15px 20px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 100%; letter-spacing: -0.6px; color: #ffffff; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;" href="https://api.whatsapp.com/send?phone=+919322066516&text=Hello%20from%20ArtizzDev" target="_blank">Chat Us</a>
                               <!--<![endif]-->
                              </th>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 6px;">
                      <table class="pc-w620-width-hug" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="top">
                         <table class="pc-w620-width-hug" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="center" valign="top">
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td valign="top" style="padding: 30px 0px 0px 0px;">
                   <img src="https://cloudfilesdm.com/postcards/image-17154213092762.png" class="" width="600" height="auto" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto;" />
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Header -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Skills -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-12-24-12-24" style="padding: 28px 28px 28px 28px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td style="padding: 0px 0px 0px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="center" valign="middle" style="padding: 28px 20px 28px 20px; background-color: #0b251b; border-radius: 12px 12px 12px 12px;">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 8px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center" style="padding: 0px 0px 0px 0px;">
                                  <div class="pc-font-alt pc-w620-fontSize-28px" style="line-height: 110%; letter-spacing: -0.04em; font-family: 'Fraunces', Arial, Helvetica, sans-serif; font-size: 40px; font-weight: bold; font-variant-ligatures: normal; color: #e3fdf3; text-align: center; text-align-last: center;">
                                   <div><span>Check Out Our Expertise</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 24px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center" style="padding: 0px 40px 0px 40px;">
                                  <div class="pc-font-alt pc-w620-fontSize-13px pc-w620-lineHeight-140pc" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 17px; font-weight: normal; font-variant-ligatures: normal; color: #e3fdf3cc; text-align: center; text-align-last: center;">
                                   <div><span>Co-ordinate campaigns and product launches, with improved overall communication.</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td>
                               <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-0-12" align="left" valign="top" style="width: 33.333333333333%; padding-top: 0px; padding-right: 6px; padding-bottom: 0px; padding-left: 0px;">
                                  <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%; height: 100%;">
                                   <tr>
                                    <td align="center" valign="middle" style="padding: 16px 12px 16px 12px; background-color: #e8faf3; border-radius: 8px 8px 8px 8px;">
                                     <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td align="center" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td align="center" valign="top" style="padding: 0px 0px 16px 0px;">
                                           <img src="https://cloudfilesdm.com/postcards/3a5620210a1379aa83d3b0314f6e084d.png" class="" width="32" height="32" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width:32px; height: auto; max-width: 100%;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="center" valign="top">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 6px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" align="center">
                                              <div class="pc-font-alt" style="line-height: 120%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; font-variant-ligatures: normal; color: #26382a; text-align: center; text-align-last: center;">
                                               <div><span>Design</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="center" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="center">
                                           <div class="pc-font-alt pc-w620-fontSize-14px" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #26382acc; text-align: center; text-align-last: center;">
                                            <div><span>Providing solutions to problems that occur </span>
                                            </div>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-w620-itemsSpacings-0-12" align="left" valign="top" style="width: 33.333333333333%; padding-top: 0px; padding-right: 6px; padding-bottom: 0px; padding-left: 6px;">
                                  <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%; height: 100%;">
                                   <tr>
                                    <td align="center" valign="middle" style="padding: 16px 12px 16px 12px; background-color: #e8faf3; border-radius: 8px 8px 8px 8px;">
                                     <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td align="center" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td align="center" valign="top" style="padding: 0px 0px 16px 0px;">
                                           <img src="https://cloudfilesdm.com/postcards/94f6d657b72acacdb2c314ae4eac29d1.png" class="" width="32" height="32" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width:32px; height: auto; max-width: 100%;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="center" valign="top">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 6px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" align="center">
                                              <div class="pc-font-alt" style="line-height: 120%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; font-variant-ligatures: normal; color: #26382a; text-align: center; text-align-last: center;">
                                               <div><span>Coding</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="center" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="center">
                                           <div class="pc-font-alt pc-w620-fontSize-14px" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #26382acc; text-align: center; text-align-last: center;">
                                            <div><span>User friendly website without you coding it</span>
                                            </div>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-0-12" align="left" valign="top" style="width: 33.333333333333%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 6px;">
                                  <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%; height: 100%;">
                                   <tr>
                                    <td align="center" valign="middle" style="padding: 16px 12px 16px 12px; background-color: #e8faf3; border-radius: 8px 8px 8px 8px;">
                                     <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td align="center" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td align="center" valign="top" style="padding: 0px 0px 16px 0px;">
                                           <img src="https://cloudfilesdm.com/postcards/2c9bfbc7658c133258725f65371cd357.png" class="" width="32" height="32" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width:32px; height: auto; max-width: 100%;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="center" valign="top">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 6px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" align="center">
                                              <div class="pc-font-alt" style="line-height: 120%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; font-variant-ligatures: normal; color: #26382a; text-align: center; text-align-last: center;">
                                               <div><span>Delivery</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="center" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="center">
                                           <div class="pc-font-alt pc-w620-fontSize-14px" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #26382acc; text-align: center; text-align-last: center;">
                                            <div><span>Site optimization to keep it fast and tidy</span>
                                            </div>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Skills -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Showcase -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-30-24-30-24" style="padding: 28px 28px 56px 28px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 10px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center" style="padding: 0px 0px 0px 0px;">
                      <div class="pc-font-alt" style="line-height: 110%; letter-spacing: -0.04em; font-family: 'Fraunces', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: bold; font-variant-ligatures: normal; color: #26382a; text-align: center; text-align-last: center;">
                       <div><span>Product Showcase</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 40px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center" style="padding: 0px 0px 0px 0px;">
                      <div class="pc-font-alt" style="line-height: 110%; letter-spacing: -0.02em; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 17px; font-weight: normal; font-variant-ligatures: normal; color: #26382acc; text-align: center; text-align-last: center;">
                       <div><span>The works that I&#39;ve made recently that I&#39;m proud of working on.</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-32-0" style="padding: 0px 0px 48px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-20" align="left" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-halign-center" align="left" valign="top">
                               <img src="https://cloudfilesdm.com/postcards/image-1715423187516.png" class="pc-w620-align-center" width="254" height="auto" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border-top: 2px dashed #febb20; border-right: 2px dashed #febb20; border-bottom: 2px dashed #febb20; border-left: 2px dashed #febb20; box-sizing: border-box;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-20" align="left" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="padding: 0px 0px 0px 0px; background-color: #ffffff; border-radius: 12px 12px 12px 12px;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 8px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" class="pc-w620-align-center" align="left" style="padding: 0px 0px 0px 0px;">
                                  <div class="pc-font-alt pc-w620-align-center" style="line-height: 120%; letter-spacing: -0.4px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 600; font-variant-ligatures: normal; color: #26382a; text-align: left; text-align-last: left;">
                                   <div><span>Vokitoki</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" class="pc-w620-align-center" align="left">
                                  <div class="pc-font-alt pc-w620-align-center pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #26382acc; text-align: left; text-align-last: left;">
                                   <div><span>Chatting App Startup We build site and also maintaining for them also the whole site custom design using elementor and custom code css</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-0-0 pc-w620-valign-middle pc-w620-halign-center" align="left" style="padding: 0px 0px 16px 0px;">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0 pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-8-30" valign="middle" style="padding-top: 0px; padding-right: 4px; padding-bottom: 0px; padding-left: 0px;">
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-8-30" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 4px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle">
                                     <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td class="pc-w620-halign-center" align="left" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <th valign="top" class="pc-w620-align-center" align="left" style="padding: 0px 0px 0px 0px; text-align: left; font-weight: normal; line-height: 1;">
                                           <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-align-center" align="left" style="border-collapse: separate; border-spacing: 0;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 20px 20px 20px 20px; border-top: 1px solid #c6d7cc; border-right: 1px solid #c6d7cc; border-bottom: 1px solid #c6d7cc; border-left: 1px solid #c6d7cc; background-color: transparent; text-align:center; color: #ffffff; padding: 6px 16px 6px 16px; mso-padding-left-alt: 0; margin-left:16px;" bgcolor="transparent">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; line-height: 150%; letter-spacing: -0.2px; text-align: center; color: #213929;" href="https://vokitoki.com/" target="_blank">Website</a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                                           <!--[if !mso]><!-- -->
                                           <a style="display: inline-block; box-sizing: border-box; border-top: 1px solid #c6d7cc; border-right: 1px solid #c6d7cc; border-bottom: 1px solid #c6d7cc; border-left: 1px solid #c6d7cc; border-radius: 20px 20px 20px 20px; background-color: transparent; padding: 6px 16px 6px 16px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; line-height: 150%; letter-spacing: -0.2px; color: #213929; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none; mso-hide: all;" href="https://vokitoki.com/" target="_blank">Website</a>
                                           <!--<![endif]-->
                                          </th>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-32-0" style="padding: 0px 0px 48px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" style="direction: rtl;" width="100%" dir="rtl" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-20" align="center" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px; direction: ltr;" dir="ltr">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-halign-center" align="left" valign="top">
                               <img src="https://cloudfilesdm.com/postcards/image-1715423192297.png" class="pc-w620-align-center" width="254" height="auto" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border-top: 2px dashed #fea30b; border-right: 2px dashed #fea30b; border-bottom: 2px dashed #fea30b; border-left: 2px dashed #fea30b; box-sizing: border-box;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-20" align="center" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px; direction: ltr;" dir="ltr">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="padding: 0px 0px 0px 0px; background-color: #ffffff; border-radius: 12px 12px 12px 12px;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 4px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" class="pc-w620-align-center" align="left" style="padding: 0px 0px 0px 0px;">
                                  <div class="pc-font-alt pc-w620-align-center" style="line-height: 120%; letter-spacing: -0.4px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 600; font-variant-ligatures: normal; color: #213929; text-align: left; text-align-last: left;">
                                   <div><span>Signature Door and kitchen</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" class="pc-w620-align-center" align="left">
                                  <div class="pc-font-alt pc-w620-align-center pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #26382acc; text-align: left; text-align-last: left;">
                                   <div><span>Elevating Bangalore businesses with bespoke doors and kitchen solutions. Seamlessly crafted websites to showcase their offerings and attract high-value clients.</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-0-0 pc-w620-valign-middle pc-w620-halign-center" align="left" style="padding: 0px 0px 16px 0px;">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0 pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-8-30" valign="middle" style="padding-top: 0px; padding-right: 4px; padding-bottom: 0px; padding-left: 0px;">
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-8-30" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 4px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle">
                                     <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td class="pc-w620-halign-center" align="left" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <th valign="top" class="pc-w620-align-center" align="left" style="padding: 0px 0px 0px 0px; text-align: left; font-weight: normal; line-height: 1;">
                                           <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-align-center" align="left" style="border-collapse: separate; border-spacing: 0;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 20px 20px 20px 20px; border-top: 1px solid #c6d7cc; border-right: 1px solid #c6d7cc; border-bottom: 1px solid #c6d7cc; border-left: 1px solid #c6d7cc; background-color: transparent; text-align:center; color: #ffffff; padding: 6px 16px 6px 16px; mso-padding-left-alt: 0; margin-left:16px;" bgcolor="transparent">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; line-height: 150%; letter-spacing: -0.2px; text-align: center; color: #213929;" href="https://signaturedoorsandkitchen.com/" target="_blank">Website</a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                                           <!--[if !mso]><!-- -->
                                           <a style="display: inline-block; box-sizing: border-box; border-top: 1px solid #c6d7cc; border-right: 1px solid #c6d7cc; border-bottom: 1px solid #c6d7cc; border-left: 1px solid #c6d7cc; border-radius: 20px 20px 20px 20px; background-color: transparent; padding: 6px 16px 6px 16px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; line-height: 150%; letter-spacing: -0.2px; color: #213929; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none; mso-hide: all;" href="https://signaturedoorsandkitchen.com/" target="_blank">Website</a>
                                           <!--<![endif]-->
                                          </th>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-valign-middle pc-w620-halign-center" style="padding: 0px 0px 0px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1 pc-w620-halign-center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-20" align="left" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="border-top: 2px dashed #ffb800; border-right: 2px dashed #ffb800; border-bottom: 2px dashed #ffb800; border-left: 2px dashed #ffb800;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-halign-center" align="left" valign="top">
                               <img src="https://cloudfilesdm.com/postcards/image-1715423193478.png" class="pc-w620-align-center" width="254" height="auto" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-20" align="left" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="padding: 0px 0px 0px 0px; background-color: #ffffff; border-radius: 12px 12px 12px 12px;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 4px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" class="pc-w620-align-center" align="left" style="padding: 0px 0px 0px 0px;">
                                  <div class="pc-font-alt pc-w620-align-center" style="line-height: 120%; letter-spacing: -0.4px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 600; font-variant-ligatures: normal; color: #213929; text-align: left; text-align-last: left;">
                                   <div><span>Hogar - Furniture Landing Page</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 10px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" class="pc-w620-align-center" align="left">
                                  <div class="pc-font-alt pc-w620-align-center pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #26382acc; text-align: left; text-align-last: left;">
                                   <div><span>We have crafted unique digital experiences for Karnataka&#39;s Delko Beach House. From design to graphics, our bespoke websites attract holiday seekers to serene beachside retreats.</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-0-0 pc-w620-valign-middle pc-w620-halign-center" align="left" style="padding: 0px 0px 16px 0px;">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0 pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-8-30" valign="middle" style="padding-top: 0px; padding-right: 4px; padding-bottom: 0px; padding-left: 0px;">
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-8-30" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 4px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td class="pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle">
                                     <table class="pc-w620-halign-center" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td class="pc-w620-halign-center" align="left" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <th valign="top" class="pc-w620-align-center" align="left" style="padding: 0px 0px 0px 0px; text-align: left; font-weight: normal; line-height: 1;">
                                           <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-align-center" align="left" style="border-collapse: separate; border-spacing: 0;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 20px 20px 20px 20px; border-top: 1px solid #c6d7cc; border-right: 1px solid #c6d7cc; border-bottom: 1px solid #c6d7cc; border-left: 1px solid #c6d7cc; background-color: transparent; text-align:center; color: #ffffff; padding: 6px 16px 6px 16px; mso-padding-left-alt: 0; margin-left:16px;" bgcolor="transparent">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; line-height: 150%; letter-spacing: -0.2px; text-align: center; color: #213929;" href="http://delkobeachhouse.com/" target="_blank">Website</a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                                           <!--[if !mso]><!-- -->
                                           <a style="display: inline-block; box-sizing: border-box; border-top: 1px solid #c6d7cc; border-right: 1px solid #c6d7cc; border-bottom: 1px solid #c6d7cc; border-left: 1px solid #c6d7cc; border-radius: 20px 20px 20px 20px; background-color: transparent; padding: 6px 16px 6px 16px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; line-height: 150%; letter-spacing: -0.2px; color: #213929; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none; mso-hide: all;" href="http://delkobeachhouse.com/" target="_blank">Website</a>
                                           <!--<![endif]-->
                                          </th>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Showcase -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Testimony -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-30-28-30-28" style="padding: 40px 28px 40px 28px; border-radius: 0px; background-color: #0b251b;" bgcolor="#0b251b">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-align-left" align="left" valign="top" style="padding: 0px 0px 26px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-align-left" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-align-left" align="left" style="padding: 0px 0px 0px 0px;">
                      <div class="pc-font-alt pc-w620-align-left pc-w620-fontSize-26px pc-w620-lineHeight-140pc" style="line-height: 110%; letter-spacing: -0.04em; font-family: 'Fraunces', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: bold; font-variant-ligatures: normal; color: #e3fdf3; text-align: left; text-align-last: left;">
                       <div><span>What They Say</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-16" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 8px; padding-bottom: 0px; padding-left: 0px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top" style="padding: 16px 16px 16px 16px; background-color: #e8faf3; border-radius: 12px 12px 12px 12px;">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-grid-td-last" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="middle">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td align="left" valign="top" style="padding: 0px 0px 8px 0px;">
                                           <img src="https://cloudfilesdm.com/postcards/image-171542131029324.png" class="" width="79" height="14" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:79px; height: auto; max-width: 100%;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-16-0" valign="top" style="padding: 0px 0px 20px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0" align="left" style="padding: 0px 0px 0px 0px;">
                                              <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #000000; text-align: left; text-align-last: left;">
                                               <div><span style="font-weight: 400;font-style: normal;">My experience was absolutely amazing!! He offered a personal and professional approach along with magnificent work ethic and detailed work.</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-valign-middle pc-w620-halign-left" align="left">
                                           <table class="pc-width-hug pc-w620-gridCollapsed-0 pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                            <tr class="pc-grid-tr-first pc-grid-tr-last">
                                             <td class="pc-grid-td-first pc-w620-itemsSpacings-12-30" valign="middle" style="padding-top: 0px; padding-right: 6px; padding-bottom: 0px; padding-left: 0px;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                               <tr>
                                                <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                                 <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                  <tr>
                                                   <td class="pc-w620-halign-left" align="left" valign="top">
                                                   </td>
                                                  </tr>
                                                 </table>
                                                </td>
                                               </tr>
                                              </table>
                                             </td>
                                             <td class="pc-grid-td-last pc-w620-itemsSpacings-12-30" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 6px;">
                                              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                               <tr>
                                                <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                                 <table class="pc-w620-halign-left" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                                  <tr>
                                                   <td class="pc-w620-halign-left" align="left" valign="top">
                                                    <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                     <tr>
                                                      <td valign="top" style="padding: 0px 0px 3px 0px;">
                                                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                                        <tr>
                                                         <td valign="top" class="pc-w620-align-left" align="left" style="padding: 0px 0px 0px 0px;">
                                                          <div class="pc-font-alt pc-w620-align-left" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                                                           <div><span>Vokitoki</span>
                                                           </div>
                                                          </div>
                                                         </td>
                                                        </tr>
                                                       </table>
                                                      </td>
                                                     </tr>
                                                    </table>
                                                   </td>
                                                  </tr>
                                                  <tr>
                                                   <td class="pc-w620-halign-left" align="left" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-halign-left" align="left" style="border-collapse: separate; border-spacing: 0;">
                                                     <tr>
                                                      <td valign="top" class="pc-w620-align-left" align="left">
                                                       <div class="pc-font-alt pc-w620-align-left" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                                                        <div><span>Startup</span>
                                                        </div>
                                                       </div>
                                                      </td>
                                                     </tr>
                                                    </table>
                                                   </td>
                                                  </tr>
                                                 </table>
                                                </td>
                                               </tr>
                                              </table>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-16" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 8px;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                       <tr>
                        <td align="left" valign="top" style="padding: 16px 16px 39px 16px; background-color: #e8faf3; border-radius: 12px 12px 12px 12px;">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left" style="padding: 0px 0px 0px 0px;">
                               <table class="pc-width-hug pc-w620-gridCollapsed-0" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-grid-td-last" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                   <tr>
                                    <td align="left" valign="middle" style="padding: 0px 0px 0px 0px;">
                                     <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td align="left" valign="top" style="padding: 0px 0px 8px 0px;">
                                           <img src="https://cloudfilesdm.com/postcards/image-171542131029426.png" class="" width="79" height="14" alt="" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:79px; height: auto; max-width: 100%;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-16-0" valign="top" style="padding: 0px 0px 20px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0" align="left" style="padding: 0px 0px 0px 0px;">
                                              <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #000000; text-align: left; text-align-last: left;">
                                               <div style="text-align: left; text-align-last: left;"><span style="font-weight: 400;font-style: normal;">Very patient in understanding the requirements, suggesting designs, and changes until the site is completed up to satisfaction.</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-valign-middle pc-w620-halign-left" align="left">
                                           <table class="pc-width-hug pc-w620-gridCollapsed-0 pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                            <tr class="pc-grid-tr-first pc-grid-tr-last">
                                             <td class="pc-grid-td-first pc-w620-itemsSpacings-12-30" valign="middle" style="padding-top: 0px; padding-right: 6px; padding-bottom: 0px; padding-left: 0px;">
                                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                               <tr>
                                                <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                                 <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                  <tr>
                                                   <td class="pc-w620-halign-left" align="left" valign="top">
                                                   </td>
                                                  </tr>
                                                 </table>
                                                </td>
                                               </tr>
                                              </table>
                                             </td>
                                             <td class="pc-grid-td-last pc-w620-itemsSpacings-12-30" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 6px;">
                                              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                               <tr>
                                                <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                                 <table class="pc-w620-halign-left" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                                  <tr>
                                                   <td class="pc-w620-halign-left" align="left" valign="top">
                                                    <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                     <tr>
                                                      <td valign="top" style="padding: 0px 0px 3px 0px;">
                                                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                                        <tr>
                                                         <td valign="top" class="pc-w620-align-left" align="left" style="padding: 0px 0px 0px 0px;">
                                                          <div class="pc-font-alt pc-w620-align-left" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                                                           <div><span>Abhay Gupta</span>
                                                           </div>
                                                          </div>
                                                         </td>
                                                        </tr>
                                                       </table>
                                                      </td>
                                                     </tr>
                                                    </table>
                                                   </td>
                                                  </tr>
                                                  <tr>
                                                   <td class="pc-w620-halign-left" align="left" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-halign-left" align="left" style="border-collapse: separate; border-spacing: 0;">
                                                     <tr>
                                                      <td valign="top" class="pc-w620-align-left" align="left">
                                                       <div class="pc-font-alt pc-w620-align-left" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                                                        <div><span>SEO Expert</span>
                                                        </div>
                                                       </div>
                                                      </td>
                                                     </tr>
                                                    </table>
                                                   </td>
                                                  </tr>
                                                 </table>
                                                </td>
                                               </tr>
                                              </table>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Testimony -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-0-28-0-28" style="padding: 0px 28px 0px 28px; border-radius: 0px; background-color: #0b251b;" bgcolor="#0b251b">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td style="padding: 0px 0px 0px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-40" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="left" valign="top" style="padding: 20px 20px 20px 20px; background-color: #e8faf3; border-radius: 12px 12px 0px 0px;">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td style="padding: 0px 0px 12px 0px;">
                               <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-0-12" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 20px; padding-bottom: 0px; padding-left: 0px;">
                                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 18px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="left" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" align="left" style="padding: 0px 0px 0px 0px;">
                                              <div class="pc-font-alt pc-w620-fontSize-26px" style="line-height: 100%; letter-spacing: -0.04em; font-family: 'Fraunces', Arial, Helvetica, sans-serif; font-size: 22px; font-weight: bold; font-variant-ligatures: normal; color: #306e50; text-align: left; text-align-last: left;">
                                               <div><span style="color: #febb20;">ArtizzDev</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-0-0" valign="top" style="padding: 0px 0px 52px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0" align="left">
                                              <div class="pc-font-alt" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #213929; text-align: left; text-align-last: left;">
                                               <div><span>We are always looking for new talent and collaborations. Feel free to contact us.</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-0-12" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 20px;">
                                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                   <tr>
                                    <td align="left" valign="top">
                                     <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 18px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" align="left" style="padding: 0px 0px 0px 0px;">
                                              <div class="pc-font-alt" style="line-height: 100%; letter-spacing: -0.2px; font-family: 'Fraunces', Arial, Helvetica, sans-serif; font-size: 22px; font-weight: bold; font-variant-ligatures: normal; color: #306e50; text-align: left; text-align-last: left;">
                                               <div><span>Contact me</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-16-0" valign="top" style="padding: 0px 0px 24px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0" align="left" style="padding: 0px 0px 0px 0px;">
                                              <div class="pc-font-alt" style="line-height: 143%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #213929; text-align: left; text-align-last: left;">
                                               <div><span style="font-weight: 400;font-style: normal;color: var(--tw-prose-body);">Gayatri Nagar Khaulkahde Road,</span>
                                               </div>
                                               <div><span style="font-weight: 400;font-style: normal;color: var(--tw-prose-body);">near school of scholar, Akola</span>
                                               </div>
                                               <div><span style="font-weight: 400;font-style: normal;color: var(--tw-prose-body);">444004   </span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 8px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" align="left">
                                              <div class="pc-font-alt" style="line-height: 133%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #213929; text-align: left; text-align-last: left;">
                                               <div><span>9322066516</span>
                                               </div>
                                               <div><span>0724-4055050</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td align="left" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                         <tr>
                                          <td valign="top" align="left">
                                           <div class="pc-font-alt" style="line-height: 171%; letter-spacing: -0.2px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #213929; text-align: left; text-align-last: left;">
                                            <div><span>Artizz.store</span>
                                            </div>
                                           </div>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td valign="top" style="padding: 10px 0px 12px 0px;">
                               <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                <tr>
                                 <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #26382a14;">&nbsp;</td>
                <![endif]-->
                                 <!--[if !gte mso 9]><!-- -->
                                 <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #26382a14;">&nbsp;</td>
                                 <!--<![endif]-->
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 10px 0px 0px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="left" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left" style="padding: 0px 0px 0px 0px;">
                                  <div class="pc-font-alt" style="line-height: 170%; letter-spacing: 0px; font-family: 'Rubik', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #213929; text-align: left; text-align-last: left;">
<!--                                    <div><span style="color: rgb(33, 57, 41);">You&#39;re receiving this email because signed up for my newsletter. If you wish to be removed from our email list </span><span style="text-decoration: underline;font-weight: 600;font-style: normal;color: rgb(48, 110, 80);">Unsubscribe</span>
                                   </div> -->
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer -->
         </td>
        </tr>
        <tr>
         <td>
         
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
 <!-- Fix for Gmail on iOS -->
 <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 </div>
</body>

</html>
`






// // async function hasEmailBeenSentToday(email) {
// //     try {
// //       const today = new Date();
// //       const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
// //       const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
// //       const count = await ClientEmails.countDocuments({
// //         email: email,
// //         isSent: true,
// //         sentAt: { $gte: startOfDay, $lt: endOfDay }
// //       });
// //       return count > 0;
// //     } catch (error) {
// //       console.error('Error checking if email has been sent today:', error);
// //       return false;
// //     }
// //   }




// // async function sendEmails() {
// //   const dkimPrivateKey = `
// //     -----BEGIN RSA PRIVATE KEY-----
// //     hostingermail1._domainkey
// //     ...
// //     YOUR DKIM PRIVATE KEY HERE
// //     ...
// //     v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxK5nAA94jYCE39FvhZeRvn1Jb/TSxfYC0lm+U/4+PKNkNO7G3/ob7VM/eSR6FeSMrHCyjoX/nz+FSliIt9A/+8f2CrW4LIlOhxlLeq+ulsYrSMLzPGyH5NbGl9Nz2PiT4Sq2VPU6Un7bVU1WEhCOnMrJzvnLhspV6amc1tzO+QqxcxOwi8sZc+ijBB5+8yPzuJWShHVsM8gIhyMvU9ADaNGU+ukFCTjWqKXJGuL7bepuHaq/OLDLVMXdDQuQpYU/hLYXW1AgnEkXHEAfJVKzxuXOYqQKcCMAJdVxWjm97WEno3hOkfr1d2ML9d5DQZxt1iLhm4v6iDbUeYr98sxepwIDAQAB
// //     ... 
// //     -----END RSA PRIVATE KEY-----
// //   `;

// //   try {
// //     const unsentEmails = await ClientEmails.find({ $or: [{ isSent: false }, { isSent: { $exists: false } }] });
// //           console.log(unsentEmails) 
// //     // Create a Nodemailer transporter
// //     const transporter = nodemailer.createTransport({
// //       host: "smtp.hostinger.com",
// //       port: 465,
// //       secure: true,
// //       auth: {
// //         user: "official@artizz.in",
// //         pass: "9529370446@abhayW",
// //       },
// //       tls: {
// //         rejectUnauthorized: false,
// //       },
// //       dkim: {
// //         domainName: 'artizz.in',
// //         keySelector: 'dkim',
// //         privateKey: dkimPrivateKey,
// //       }
// //     });

// //     // Send emails
// //     for (const emailDoc  of unsentEmails) {
// //         const email = emailDoc.email;
// //         console.log(email)
// //         if (email && isValidEmail(email)) {
// //         if (await hasEmailBeenSentToday(email)) {
// //           console.log(`Skipping email to ${emailAddress} as it has already been sent today.`);
// //           continue;
// //         }
// //         try {
// //           await transporter.sendMail({
// //             from: "official@artizz.in",
// //             to: email,
// //             subject: emailSubject, // You need to define emailSubject
// //             text: emailBody, // You need to define emailBody
// //             html: Htm1, // You need to define Htm1
// //           });
// //           console.log(`Email sent successfully to ${emailAddress}`);
// //         } catch (error) {
// //           console.error(`Error sending email to ${emailAddress}:`, error);
// //         }
// //       } else {
// //         console.log(`Invalid email address found in MongoDB: ${emailAddress}`);
// //       }
// //     }
// //     console.log("All emails sent.");
// //     return;
// //   } catch (error) {
// //     console.error("Error:", error);
// //   }
// // }

// // function isValidEmail(email) {
// //   // Regular expression for validating email addresses
// //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //   return emailRegex.test(email);
// // }


// // module.exports = sendEmails  ;







// async function sendEmails(emails) {
//   const dkimPrivateKey = `
//     -----BEGIN RSA PRIVATE KEY-----
//     hostingermail1._domainkey
//     ...
//     YOUR DKIM PRIVATE KEY HERE
//     ...
//     v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxK5nAA94jYCE39FvhZeRvn1Jb/TSxfYC0lm+U/4+PKNkNO7G3/ob7VM/eSR6FeSMrHCyjoX/nz+FSliIt9A/+8f2CrW4LIlOhxlLeq+ulsYrSMLzPGyH5NbGl9Nz2PiT4Sq2VPU6Un7bVU1WEhCOnMrJzvnLhspV6amc1tzO+QqxcxOwi8sZc+ijBB5+8yPzuJWShHVsM8gIhyMvU9ADaNGU+ukFCTjWqKXJGuL7bepuHaq/OLDLVMXdDQuQpYU/hLYXW1AgnEkXHEAfJVKzxuXOYqQKcCMAJdVxWjm97WEno3hOkfr1d2ML9d5DQZxt1iLhm4v6iDbUeYr98sxepwIDAQAB
//     ... 
//     -----END RSA PRIVATE KEY-----
//   `;

//   try {
//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: "smtp.hostinger.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "official@artizz.in",
//         pass: "9529370446@aW",
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//       dkim: {
//         domainName: 'artizz.in',
//         keySelector: 'dkim',
//         privateKey: dkimPrivateKey,
//       }
//     });

//     // Send emails
//     for (const email of emails) {
// console.log(email)
//         try {
//             await transporter.sendMail({
//                 from: "official@artizz.in",
//                 to: email, // Ensure that 'email' is defined and not empty
//                 subject: emailSubject, // You need to define emailSubject
//                 text: emailBody, // You need to define emailBody
//                 html: Htm1, // You need to define Htm1
//               });
//           console.log(`Email sent successfully to ${email}`);
//         } catch (error) {
//           console.error(`Error sending email to ${email}:`, error);
//         }
//     }
//     console.log("All emails sent.");
//     return;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }


// module.exports = sendEmails;








async function sendEmail(email) {
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "official@artizz.in",
        pass: "9529370446@aW",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "official@artizz.in",
        to: email, // Ensure that 'email' is defined and not empty
        subject: emailSubject, // You need to define emailSubject
        text: emailBody, // You need to define emailBody
        html: Htm1,
    });

    console.log('Message sent: %s', info.messageId);
}

// Call the function with the email address you want to send the email to

module.exports = sendEmail;
