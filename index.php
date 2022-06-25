<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Musée HR.GIGER</title>
  <meta name="description" content="Learn more about Giger Museum">
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
  <script src="ajax_newsletter.js" defer></script>

</head>
<body>
  <header>
    <div class="logo-title-header">
      <img src="img/logo.webp" alt="Logo du site web" width="60" height="120" />
      <h2>
        HR.GIGER<br />
        MUSEUM
      </h2>
    </div>
    <nav>
      <ul class="list-nav">
        <li><a class="hover_menu" href="#page-landing">HOMEPAGE</a></li>
        <li><a class="hover_menu" href="#page-access">MUSEUM</a></li>
        <li><a class="hover_menu" href="#page-exhibition">GALLERY</a></li>
        <li><a class="hover_menu" href="#page-video">MOVIE</a></li>
        <li><a class="hover_menu" href="#page-bio">BIOGRAPHY</a></li>
        <li><a class="hover_menu" href="#page-sub">CONTACT</a></li>
        <li><a class="button-languev2" href="#"><span>FRENCH</span></a></li>
      </ul>
    </nav>

    <div class="box"> <!-- menu burger responsive -->
      <div class="cont-lignes btn1">
      <div class="lignes"></div>
      <div class="lignes"></div>
      <div class="lignes"></div>
      </div>
    </div>
  </header>

<div class="les-rods">
  <div class="mooving-rod"></div>
  <div class="mooving-rod"></div>
  <div class="mooving-rod"></div>
</div>
 
    <!-- Landing Page -->
    <div class="flex">
    <div id="page-landing"  class="page  page-landing">
<div id="main-title">
  <div id="title-museum_landing-page">
      <h1>HR.GIGER<br>
        MUSEUM
      </h1></div>
      <div class="grid-main-img">
        <div class="img-menu1 card"></div>
        <div class="img-menu2 card"></div>
        <div class="img-menu3 card"></div>
      </div>
    </div>
</div>
<!--ACCESS TO THE MUSEUM-->
<div id="page-access" class="page  page-access">
  <h2 class="title-page">
    MUSEUM
  </h2>
  <div class="main-access">
    <div id="grid-access">
      <div id="opening-hours">
       <h2>OPENING HOURS</h2>
          <p id="hours-1">Monday Closed</p>
          <p id="hours-2"> Tuesday to Friday 1pm to 5pm</p>
          <p id="hours-3">Saturday and Sunday 10am to 6pm </p>
      </div>
      <img id="img-museum" src="img/photo-musée_exterieur.webp" width="500" height="300" alt="image of a door">
          <img id="img-psy" src="img/psychonauten_actual_exhibition.webp" width="500" height="300" alt="Affiche de l'actuelle exposition">
      <div class="news-text-flex">
        <h3 id="title-article-news">PSYCHONAUTEN II <span>From May 14 to November 2022</span></h3>
        <p class="paragraphe-news">A group exhibition of Stanisky Grof Curated by Nadia Honarchian and Claude Steiner, in cooperation with Carmen Giger-Scheifele, the exhibition is a sequel of the Psychonauten l group exhibition in 2008, which was in honour of Albert Hofmann, the discoverer of LSD</p>
      </div>
    </div>
  </div>
</div>
     <!-- MUSEUM'S GALLERY-->
    <div id="page-exhibition" class="page  page-exhibition">
      <h2 class="title-page">
        MUSEUM'S GALLERY
      </h2>
      <div class="main-exhibition">
        <h3>Photos Gallery from the last exhibitions</h3>
        <div id="carrousel">
          <div id="container">
          </div>
          <img id="g" class="bouton" src="img/left-arrow.webp" alt="">
          <img id="d" class="bouton" src="img/right-arrow.webp" alt="">
        </div>
        <div id="carrousel-responsive">
          <div id="container-responsive">
          </div>
          <img id="g-responsive" class="bouton-responsive" src="img/left-arrow.webp" alt="">
          <img id="d-responsive" class="bouton-responsive" src="img/right-arrow.webp" alt="">
        </div>
      </div>
    </div>
    <!--VIDEO-->
    <div id="page-video" class="page  page-video">
      <h2 class="title-page">
        SHORT MOVIES
      </h2>
      <div class="main-video">
        <iframe width="730" height="415" src="https://www.youtube.com/embed/DmyfIhLbZ0I" title="YouTube video player"></iframe>

      </div>
    </div>
    <!--BIO-->
    <div id="page-bio" class="page  page-bio">
      <h2 class="title-page">
        BIOGRAPHY
      </h2>
      <div class="main-bio">
        <div class="text-bio-link">
          <p>H.R. Giger was born in Chur, Switzerland, in 1940. As a child he developed a strong passion for all things
            surreal and macabre. His need to express himself and share the unique aspects of his powerful imagination
            drew him to the visual arts. Giger’s own dreams and the brilliant imagery of such fantastic geniuses as
            Gustav Meyrink, Jean Cocteau, Alfred Kubin and H.P. Lovecraft combined to form a rich soil from which the
            amzing imagery of Giger’s own art has come to sprout. It has since bloomed into the vast wealth of exotic
            women, wondrously bizarre landscapes, and frightening creatures that have captured the fascination of
            millions of fans worldwide.</p>
        </div>
        <img src="img/bio_img.webp" width="414" height="627" alt="">
      </div>
    </div>
    <!--Subscribe-->
    <div id="page-sub" class="page page-sub">
      <div class="main-sub">
        <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=7.050175666809082%2C46.57216722020985%2C7.106823921203614%2C46.59818151347685&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small></small>
        <div class="info-sub">
          <div id="form-sub">
            <h2>Subscribe to the newsletter</h2>
            
        <form action="formulaire_inscription-newletter.php"  method="post" novalidate >
            <label for="email"></label>
            <input type="email" id="email" class="input" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address">

            <button id="btn" type="submit">Validate</button>
                    
       </form>
           <div class="invisible"></div>
   </div>
        <div class="information">
          <h3>Follow Us</h3>
          <div class="social_logo">
            <a href="https://www.facebook.com/hrgigermuseum/"><img src="img/facebook.webp" width="100" height="100" alt="Facebook"></a>
            <a href="https://www.instagram.com/hr_giger_museum/?hl=fr"><img src="img/insta.webp" width="100" height="100" alt="Instagram"></a>
            <a href="https://twitter.com/gigerart?lang=fr"><img src="img/twitter.webp" width="100" height="100" alt="Twitter"></a>
          </div>
          
        </div>
      </div>
          </div>
        </div>
        </div>
  <footer>
<img id="left_arrow-main" src="img/Arrow_Left_Main.webp" alt="">
<img id="right_arrow-main" src="img/Arrow_Right_Main.webp" alt="">
    <p id="text-footer">
      Château St. Germain, CH-1663 Gruyères, Suisse<br />
      Tél. +41 26 921 22 00, info@hrgigermuseum.com
    </p> 
  </footer>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>

</body>

</html>