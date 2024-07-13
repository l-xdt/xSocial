// === SideBar ===

const menuItems = document.querySelectorAll('.menu-item');

// == Messages ==

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// == Theme Customization ==

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalete = document.querySelectorAll('.choose-color span');

// === Sidebar ===

// Remove Active Class

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// == Messages ==

// Searches Chat

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}

// Message Search

messageSearch.addEventListener('keyup', searchMessage);


// Message Highlight

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(()  => {
        messages.style.boxShadow = 'none';
    }, 2000)
})

// === Theme Customization ====

// Modal

// Open Modal

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Close Modal 

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display ='none';
    }
}

// Close Modal

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// === Fonts ====

// Remove Active Class From Spans/Font Size Selectors

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
    }  else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
    } else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left', '-10rem');
        root.style.setProperty('--sticky-top-right', '-33rem');
    }
    
        // Change fontSize of the Root HTML element

        document.querySelector('html').style.fontSize = fontSize;
    })

})

// Remove Active Class From  Colors

const changeActiveColorClass = () => {
    colorPalete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


// Chamge Primary Colors

colorPalete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        
        // Remove Active Class From  Colors
        changeActiveColorClass();
        
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
         } else if(color.classList.contains('color-3')){
            primaryHue = 352;
       } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })

})

// Theme Background Values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes background colors

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

// Change Background Colors

bg1.addEventListener('click', () => {
    // Add active Class
    bg1.classList.add('active');
    // Remove Active Class From the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // Remove customized changes from local storage
    window.location.reload();
});

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // Add active Class
    bg2.classList.add('active');
    // Remove Active Class From the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // Add active Class
    bg3.classList.add('active');
    // Remove Active Class From the others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});

// End