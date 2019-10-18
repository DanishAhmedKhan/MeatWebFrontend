let login = $('.main .login');
let signup = $('.main .signup');
let home = $('.main .home');
let order = $('.order');
let setting = $('.setting');
let logButton = $('.header .main .log-button');
let currentSection;


function currentSectionVisible() {
    currentSection.css('display', 'block');
}

function currentSectionGone() {
    currentSection.css('display', 'none');
}

function navGone() {
    $('.header .nav').css('display', 'none');
    $('.header .main').css('border-bottom', 'solid rgba(0, 0, 0, .5) 1px');
}

function navVisible() {
    $('.header .nav').css('display', 'block');
    $('.header .main').css('border-bottom', 'none');
}

logButton.click(() => {
    if (currentSection == login) {
        currentSectionGone();
        currentSection = signup;
        currentSectionVisible();
        logButton.text('Login');
    } else if (currentSection == signup) {
        currentSectionGone();
        currentSection = login;
        currentSectionVisible();
        logButton.text('Signup');
    } else {
        inventoryLogout();
    }
});

if (typeof(Storage) !== "undefined") {
    let loginToken = localStorage.getItem('loginToken');
    if (loginToken === null) {
        console.log('Not logged in');
        currentSection = login;
        logButton.text('Signup');
        navGone();
    } else {
        console.log('Logged in');
        currentSection = home;
        logButton.text('Logout');
        navVisible();
    }
    currentSectionVisible();
} else {
    // No web storage support
    console.log('No web storage available');
}



function  inventoryLogin(event) {
    event.preventDefault();
    console.log('Login');

    let data = {
        email: $('.main .login #login-email').val(),
        password: $('.main .login #login-password').val(),
        token: token
    };

    
    navVisible();
    currentSectionGone();
    currentSection = home;
    currentSectionVisible();


    // $.post(
    //     'http://localhost:4000/api/inventory/login',
    //     data,
    //     (data, status) => {
    //         if (data.status == 200) {
    //             console.log('Logged in!');
    //             //localStorage.setItem('loginToken', data.header['x-inventory-suth-token']);
    //             currentSectionGone();
    //             currentSection = home;
    //             currentSectionVisible();



    //             logButton.text('Logout');
    //         } else {
                
    //         }
    //     }
    // )    

    return false;
}

function inventorySignup(event) {
    //event.preventDefault();
    console.log('Signup');
    
    let data = {
        email: $('.main .signup #signup-email').val(),
        password: $('.main .signup #signup-password').val(),
        address: {
            line: $('.main .signup #signup-address').val(),
            country: $('.main .signup #signup-country').val(),
            state: $('.main .signup #signup-state').val(),
            city: $('.main .signup #signup-city').val(),
            zip: $('.main .signup #signup-zip').val(),
        },
        lat: $('.main .signup #signup-lat').val(),
        lng: $('.main .signup #signup-lng').val(),
        secretCode: $('.main .signup #signup-code').val(),
    }

    $.post(
        'http://localhost:4000/api/inventory/signup',
        data,
        (data, status) => {
            console.log(data);
            console.log(status);
            if (data.status == 200) {
                let authToken = data.getResponseHeader('x-inventory-auth-token');
                localStorage.setItem('authToken', 
                    authToken);
                console.log(authToken);
                logButton.text('Logout');
                navVisible();
                currentSectionGone();
                currentSection = home;
                currentSectionVisible();
            } else {
                console.log('Signup error');
            }
        }
    );

    return false;
}

function inventoryLogout() {
    console.log('Logout');

    $.post(
        'http://localhost:4000/api/inventory/logout',
        data,
        (data, status) => {
            if (data.status == 200) {
                
            } else {
                
            }
        }
    ) 
}


// Menu navigation
let homeMenu = $('.header .nav #menu-home');
let orderMenu = $('.header .nav #menu-order');
let settingMenu = $('.header .nav #menu-setting');

function removeActiveMenu() {
    homeMenu.removeClass('active');
    orderMenu.removeClass('active');
    settingMenu.removeClass('active');
}

homeMenu.click(() => {
    console.log('Home');
    removeActiveMenu();
    homeMenu.addClass('active');
    currentSectionGone();
    currentSection = home;
    currentSectionVisible();
});

orderMenu.click(() => {
    console.log('order');
    removeActiveMenu();
    orderMenu.addClass('active');
    currentSectionGone();
    currentSection = order;
    currentSectionVisible();
});

settingMenu.click(() => {
    console.log('Setting');
    removeActiveMenu();
    settingMenu.addClass('active');
    currentSectionGone();
    currentSection = setting;
    currentSectionVisible();
});