class MobileNavBar {
    constructor(mobileMenu, navList, navLink) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelector(navLink);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }

    animatedLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards $
            {index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toogle(this.activeClass);
        this.mobileMenu.classList.toogle(this.activeClass);
        this.animatedLinks();
    }

    addClickEvent() {
        this.mobileMenu,addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

mobileNavBar.init();