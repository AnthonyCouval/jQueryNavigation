$(document).ready(function() {

    const $contents = $('[id^="content-"]');
    const $liNav = $('.navbar-nav li');

    $contents.hide();

    //gestion du refresh & recup du hash
    let getHash = window.location.hash;
    if (getHash) {
        if (getHash != '#home' && getHash != '#page1' && getHash != '#page2' && getHash != '#page3') {
            getHash = '#home';
        }
        let link = getHash.replace('#', '');
        let navLink = link.substr(0, 1) + link.substr(1);

        $('#content-' + link).show();
        $liNav.removeClass('active');
        $('#nav-' + navLink).addClass('active');
        console.log('#nav-' + navLink + ' li');
    } else {
        $contents.hide();
        $('#home').show();
    }

    //navigation + content auto + ajout d'un hash à l'url
    $liNav.click(function (event) {
        const showThis = $(this).attr('id');
        const getId = showThis.toLowerCase().replace('nav-', '');

        $contents.hide();

        $liNav.removeClass('active');
        $(this).addClass('active');

        $('#content-' + getId).show();

        window.location.hash = getId;
        event.preventDefault();
    });

});