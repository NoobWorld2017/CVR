document.getElementById("home").onmouseover = () => {
    document.getElementById("home").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}


document.getElementById("home").onmouseout = () => {
    document.getElementById("home").style.backgroundColor = "#121212";
}


document.getElementById("release").onmouseover = () => {
    document.getElementById("release").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

document.getElementById("release").onmouseout = () => {
    document.getElementById("release").style.backgroundColor = "#121212";
}


document.getElementById("artists").onmouseover = () => {
    document.getElementById("artists").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

document.getElementById("artists").onmouseout = () => {
    document.getElementById("artists").style.backgroundColor = "#121212";
}


document.getElementById("contact").onmouseover = () => {
    document.getElementById("contact").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

document.getElementById("contact").onmouseout = () => {
    document.getElementById("contact").style.backgroundColor = "#121212";
}

function homepage (){
    document.getElementById("content-section").innerHTML = 
        '<div class="main-section">' +
            '<div class="row-section" style="border-left:1px #484848 solid">' +

                '<img src="./images/haas.png" class="profil-pics">' +
                '<h3>DJ-U4IC</h3>' +

                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur at. Donec' +
                'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula. Vestibulum viverra' +
                'elit purus, ac tincidunt nisl malesuada nec.</p>' +

            '</div>' +

            '<div class="row-section">' +

                '<img src="./images/john.png" class="profil-pics">' +
                '<h3>DJ-BeepyBoop</h3>' +

                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur at. Donec' +
                'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula. Vestibulum viverra' +
                'elit purus, ac tincidunt nisl malesuada nec.</p>' +
            '</div>' +

            '<div class="row-section">' +

                '<img src="./images/smaug.png" class="profil-pics">' +
                '<h3>FudgeBumper</h3>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur at. Donec' +
                'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula. Vestibulum viverra' +
                'elit purus, ac tincidunt nisl malesuada nec.</p>'+
            '</div>' +

            '<div class="clear"></div>' +

        '</div>' +

        '<div id="about-container">' +
            '<div id="about-section">' +
                '<h2>About us!</h2>' +
                '<p>Originating from Windsor, Ontario, Canada. Crystal Vortex Records is dedicated to providing an innovative diversity of quality' +
                'electronic music to the public. We are currently in the process of expanding our company and are looking for artists' +
                'who would like to release under our label.</p>'+

                '<p>We are a free netlabel, meaning there is no profit involved (for now). But we are working on becoming a profitable label' +
                'and releasing our tracks with both a free and new premium model.</p>' +

                '<p>If you would like to help in any way, or release your music through us, feel free to leave some feedback in our <a href="#">Contacts</a> form.' +
                'We will be sure to get back to you as soon as possible.</p>' +

                '<p style="margin:0 25px"> Enjoy the Music!!</p>' +
                '<p style="margin:0 25px"> - Crystal Vortex Records</p>' +
            '</div>' +
        '</div>';
}

document.getElementById('home').onclick = function () {
        document.getElementById("content-section").innerHTML =
            '<div class="main-section">' +
            '<div class="row-section" style="border-left:1px #484848 solid">' +

            '<img src="./images/haas.png" class="profil-pics">' +
            '<h3>DJ-U4IC</h3>' +

            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur at. Donec' +
            'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula. Vestibulum viverra' +
            'elit purus, ac tincidunt nisl malesuada nec.</p>' +

            '</div>' +

            '<div class="row-section">' +

            '<img src="./images/john.png" class="profil-pics">' +
            '<h3>DJ-BeepyBoop</h3>' +

            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur at. Donec' +
            'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula. Vestibulum viverra' +
            'elit purus, ac tincidunt nisl malesuada nec.</p>' +
            '</div>' +

            '<div class="row-section">' +

            '<img src="./images/smaug.png" class="profil-pics">' +
            '<h3>FudgeBumper</h3>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur at. Donec' +
            'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula. Vestibulum viverra' +
            'elit purus, ac tincidunt nisl malesuada nec.</p>' +
            '</div>' +

            '<div class="clear"></div>' +

            '</div>' +

            '<div id="about-container">' +
            '<div id="about-section">' +
            '<h2>About us!</h2>' +
            '<p>Originating from Windsor, Ontario, Canada. Crystal Vortex Records is dedicated to providing an innovative diversity of quality' +
            'electronic music to the public. We are currently in the process of expanding our company and are looking for artists' +
            'who would like to release under our label.</p>' +

            '<p>We are a free netlabel, meaning there is no profit involved (for now). But we are working on becoming a profitable label' +
            'and releasing our tracks with both a free and new premium model.</p>' +

            '<p>If you would like to help in any way, or release your music through us, feel free to leave some feedback in our <a href="#">Contacts</a> form.' +
            'We will be sure to get back to you as soon as possible.</p>' +

            '<p style="margin:0 25px"> Enjoy the Music!!</p>' +
            '<p style="margin:0 25px"> - Crystal Vortex Records</p>' +
            '</div>' +
            '</div>';
};

document.getElementById('contact').onclick = function () {

    document.getElementById("content-section").innerHTML = 
    '<div id="contact-container">' +
            '<h1>Contact us!</h1>' +

            '<form id="contact-form">' +
                '<p><label for="name">Name</label></p>' +
                '<p><input type="text" id="name" placeholder="Enter your name."></p>' +
                '<p><label for="email">Email</label></p>' +
                '<p><input type="text" id="email" placeholder="Enter a email address"></p>' +
                '<p><label for="message">Message</label></p>' +
                '<p><textarea id="message" cols="60" rows="10" placeholder="Enter a message"></textarea></p>' +
                '<p><button id="submit-button">Submit</button></p>' +
            '</form>' +
        '</div>';
}

document.getElementById("release").onclick = function () {

    document.getElementById("content-section").innerHTML = 
    '<div id="release-container">' +
            '<h2 id="premium">Premium Releases</h2>' +

            '<div id="music-container">' +

                '<div class="albums">' +
                    '<img src="./images/cvr005-1-cover.gif" class="album-img">' +
                    '<p>Come fly with us</p>' +
                '</div>' +

                '<div class="albums">' +
                    '<img src="./images/cvr004-2cover.gif" class="album-img">' +
                    '<p>Transit</p>' +
                '</div>' +

                '<div class="albums">' +
                    '<img src="./images/CVR003-3-Artwork.gif" class="album-img">' +
                    '<p>Uh oh</p>' +
                '</div>' +

                '<div class="albums" style="border:none">' +
                    '<img src="./images/CVR002-4-Artwork.gif" class="album-img">' +
                    '<p>Locus somnorum ep</p>' +
                '</div>' +

                '<div class="clear"></div>' +

            '</div>' +
        '</div>' +
        

        '<div id="free-release-container">' +
            '<h2 id="free">Free Releases</h2>' +

            '<div id="free-music-container">' +

                '<div class="albums">' +
                    '<img src="./images/cvr005-1-cover.gif" class="album-img">' +
                    '<p>Come fly with us</p>' +
                '</div>' +

                '<div class="albums">' +
                    '<img src="./images/cvr004-2cover.gif" class="album-img">' +
                    '<p>Transit</p>' +
                '</div>' +

                '<div class="albums">' +
                    '<img src="./images/CVR003-3-Artwork.gif" class="album-img">' +
                    '<p>Uh oh</p>' +
                '</div>' +

                '<div class="albums" style="border:none">' +
                    '<img src="./images/CVR002-4-Artwork.gif" class="album-img">' +
                    '<p>Locus somnorum ep</p>' +
                '</div>' +

                '<div class="clear"></div>' +

            '</div>' +
        '</div>';

}

document.getElementById("artists").onclick = function () {
    document.getElementById("content-section").innerHTML = 
    '<div class="main-section">' +
            '<div class="row-section" style="border-left:1px #ccc solid">' +

                '<img src="./images/haas.png" class="profil-pics">' +
                '<h3>DJ-U4IC</h3>' +

                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur' +
                    'at. Donec' + 'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula.' +
                    'Vestibulum viverra' + 'elit purus, ac tincidunt nisl malesuada nec.</p>' +

            '</div>' +

            '<div class="row-section">' +

                '<img src="./images/john.png" class="profil-pics">' +
                '<h3>DJ-BeepyBoop</h3>' +

                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur' +
                    'at. Donec' + 'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula.' +
                    'Vestibulum viverra' + 'elit purus, ac tincidunt nisl malesuada nec.</p>' +
            '</div>' +

            '<div class="row-section">' +

                '<img src="./images/smaug.png" class="profil-pics">' +
                '<h3>FudgeBumper</h3>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur' +
                    'at. Donec' + 'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula.' +
                    'Vestibulum viverra' + 'elit purus, ac tincidunt nisl malesuada nec.</p>' +
            '</div>' +

            '<div class="clear"></div>' +

        '</div>' +
        
        '<div class="main-section">' +
            '<div class="row-section" style="border-left:1px #ccc solid" id="second-row-section-one">' +

                '<img src="./images/joe.png" class="profil-pics">' +
                '<h3>DJ-Bully</h3>' +

                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur' +
                    'at. Donec' + 'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula.' +
                    'Vestibulum viverra' + 'elit purus, ac tincidunt nisl malesuada nec.</p>' +

            '</div>' +

            '<div class="row-section" style="margin-top:0">' +

                '<img src="./images/briant.png" class="profil-pics">' +
                '<h3>DJ-HandC@wk</h3>' +

                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur' +
                    'at. Donec' + 'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula.' +
                    'Vestibulum viverra' + 'elit purus, ac tincidunt nisl malesuada nec.</p>' +
            '</div>' +

            '<div class="row-section" style="margin-top:0">' +

                '<img src="./images/jesus.png" class="profil-pics">' +
                '<h3>DJ-Jesus</h3>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas sagittis leo, ac maximus augue efficitur' +
                    'at. Donec' + 'felis urna, imperdiet non ullamcorper vitae, ultricies a felis. Donec feugiat vitae dolor ac vehicula.' +
                    'Vestibulum viverra' + 'elit purus, ac tincidunt nisl malesuada nec.</p>' +
            '</div>'+

            '<div class="clear"></div>' +

        '</div>';
}