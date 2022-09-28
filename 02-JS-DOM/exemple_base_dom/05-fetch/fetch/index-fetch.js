console.log("krashtest")

// Parent global
const kush = document.getElementById('kush');
const root = document.querySelector(':root');

// Style CSS
root.style.setProperty('--primary', '#008F8C');
root.style.setProperty('--secondary', '#015958');
root.style.setProperty('--white', '#ffffff');
root.style.setProperty('--accent', '#260101');
root.style.setProperty('--light', '#D8FFDB');
root.style.setProperty('--dark', '#023535');

/*
 * Store:
 * ****** */

const store = {
    state: {
        title: 'Mon super titre',
        description: "Ma super description",
        searchList: {
            searchList: [],
            setSearchList(data) {
                this.searchList = [...data]
            },
            getSearchList() {
                return this.searchList
            }
        },
        colors: {
            primary: getComputedStyle(root).getPropertyValue('--primary'),
            secondary: getComputedStyle(root).getPropertyValue('--secondary'),
            white: getComputedStyle(root).getPropertyValue('--white'),
            light: getComputedStyle(root).getPropertyValue('--light'),
            accent: getComputedStyle(root).getPropertyValue('--accent'),
            dark: getComputedStyle(root).getPropertyValue('--dark')
        },
        listCard: [{
            id: 0,
            name: 'card-1',
            title: "title 1",
            description: "Ma super description de ma card"
        }, {
            id: 1,
            name: 'card-2',
            title: "title 2",
            description: "Ma super description de ma card"
        }, {
            id: 2,
            name: 'card-3',
            title: "title 3",
            description: "Ma super description de ma card"
        }],
        actionsHeaders: [{
            id: 0,
            name: 'started',
            title: "Get Started !",
            link: "#",
            color: 'primary'
        },
        {
            id: 0,
            name: 'contact',
            title: "Contact us !",
            link: "#",
            color: 'accent'
        },
        ],
        categories: [{
            id: 0,
            name: 'home',
            title: "Acceuil"
        },
        {
            id: 1,
            name: 'contact',
            title: "Contactez-nous"
        }
        ]
    },
    // mutations: {
    //     setSearchList() {
    //         console.log('setSearchList', this)
    //     }
    // },
    // getters: {
    //     getSearchList: () => {
    //         console.log('getSearchList', this.state, store.state)
    //         return store.state.searchList
    //     }
    // },
    actions: {
        getData(url) {
            return new Promise((resolve, reject) => {
                // Fetch permet de faire une recherche via notre url
                fetch(url).then(res => res.json()).then(res => {
                    resolve(res.data)
                }).catch(err => reject(err))
            })
        },
        fnDarkMode: (themeDark) => {
            console.log('fnDarkMode', typeof themeDark)
            const theme = (themeDark === 'true') ? true : false;

            // switch themes
            document.body.style.color = theme ? store.state.colors.light : store.state.colors.dark;
            document.body.style.backgroundColor = theme ? store.state.colors.dark : store.state.colors.light;

            // Btn Dark Mode
            const btnDarkMode = document.getElementById('btn-dark-mode');

            if (btnDarkMode) {
                btnDarkMode.textContent = theme ? "Mode Light" : "Mode Dark"
                btnDarkMode.style.backgroundColor = theme ? store.state.colors.light : store.state.colors.dark;
                btnDarkMode.style.color = theme ? store.state.colors.accent : store.state.colors.light;
            }

        }
    }
}

/*
 * Components:
 * *********** */

const components = {
    // Navbar
    navbarBuild: () => {
        console.log('navbarBuild')
        // Create navbar
        const navbar = document.createElement('nav')
        const link_title_nav = document.createElement('a')
        const title_nav = document.createElement('h2')
        const listitem_nav = document.createElement('ul')

        // Nav style
        navbar.style.backgroundColor = store.state.colors.primary
        navbar.style.width = '100vw'
        navbar.style.height = '7vh'
        navbar.style.display = 'flex'
        navbar.style.justifyContent = 'space-between'
        navbar.style.alignItems = 'center'
        navbar.style.position = 'fixed'
        navbar.style.boxShadow = '0px 1px 25px ' + store.state.colors.accent
        navbar.style.borderBottom = "solid 2px " + store.state.colors.accent

        // Title nav + link
        title_nav.innerText = store.state.title.toUpperCase()

        link_title_nav.setAttribute('href', '/')
        link_title_nav.style.textDecoration = 'none'
        link_title_nav.style.color = store.state.colors.light
        link_title_nav.style.margin = '0 0 0 15px'
        link_title_nav.style.display = 'flex'
        link_title_nav.style.justifyContent = 'center'
        link_title_nav.style.alignItems = 'center'

        // Assign title (h2) on link (a)
        link_title_nav.appendChild(title_nav)

        // List item nav style
        listitem_nav.style.display = 'flex'

        // Item nav (item1, item2, ...)
        store.state.categories.map((cat, index) => {
            // Create item (li)
            let item_nav = document.createElement('li')
            item_nav.style.listStyle = 'none'
            item_nav.style.margin = '0 25px'

            // Create link (a)
            let link = document.createElement('a')
            link.setAttribute('href', '/' + cat.name)
            link.style.textDecoration = 'none'
            link.innerText = cat.name.toUpperCase()
            link.style.color = store.state.colors.light

            // Inject link on item_nav
            item_nav.appendChild(link)
            // Injection des items dans la nav
            listitem_nav.appendChild(item_nav)
        })

        // Assign title_nav on navbar to in child kush
        kush.appendChild(navbar).appendChild(link_title_nav)
        // Assign list on child navbar
        navbar.appendChild(listitem_nav)
    },

    // Header
    headerBuild: () => {
        console.log('headerBuild')
        // Create Header
        const header = document.createElement('header')
        header.style.minHeight = "80vh"
        header.style.minWidth = "100%"
        header.style.display = "flex"
        header.style.flexDirection = "column"
        header.style.justifyContent = "center"
        header.style.alignItems = "center"
        // H1
        const h1 = document.createElement('h1')
        h1.textContent = store.state.title
        h1.style.textAlign = 'center'
        // H2
        const h3 = document.createElement('h3')
        h3.textContent = store.state.description
        h3.style.textAlign = 'center'

        // div (btn)
        const divBtnHeader = document.createElement('div')

        store.state.actionsHeaders.map(item => {
            let btn = document.createElement('button')

            btn.textContent = item.title
            btn.style.backgroundColor = store.state.colors[item.color]
            btn.style.color = store.state.colors.light
            btn.className = 'btn'
            btn.style.borderRadius = "30px"
            btn.style.margin = "0 10px"
            btn.style.border = 'solid 2px ' + store.state.colors.accent

            divBtnHeader.appendChild(btn)
        })

        // Assign h1 to child Kush
        kush.appendChild(header).appendChild(h1)
        header.appendChild(h3)
        header.appendChild(divBtnHeader)
    },

    // BtnDarkMode
    btnDarkModeBuild: () => {
        console.log('btnDarkModeBuild')
        // Create btn (dark-mode)
        const btnDarkMode = document.createElement('button')
        btnDarkMode.textContent = "Mode Dark"
        btnDarkMode.setAttribute('id', "btn-dark-mode")
        btnDarkMode.style.backgroundColor = store.state.colors.dark
        btnDarkMode.style.color = store.state.colors.light
        btnDarkMode.style.position = "fixed"
        btnDarkMode.style.top = "100px"
        btnDarkMode.style.right = "15px"
        btnDarkMode.style.borderRadius = "30px"
        btnDarkMode.style.border = 'solid 2px ' + store.state.colors.accent
        btnDarkMode.style.textAlign = 'center'
        btnDarkMode.addEventListener('click', () => {
            const ls_dark = localStorage.getItem('dark')
            localStorage.setItem('dark', !ls_dark || ls_dark === 'false' ?
                true :
                false
            )
        }, false)

        // Assign btn () to child Kush
        kush.appendChild(btnDarkMode)
    },

    // ListCard
    listCard: (array, title, subtitle, filtered) => {
        console.log('listCard')
        const listCardAuto = document.createElement('section')
        const title_listCardAuto = document.createElement('h4')
        const subtitle_listCardAuto = document.createElement('p')
        const divListcardAuto = document.createElement('div')

        listCardAuto.style.textAlign = 'center'
        listCardAuto.style.maxWidth = '100vw'
        listCardAuto.style.minHeight = '50vh'
        listCardAuto.style.display = 'flex'
        listCardAuto.style.flexDirection = 'column'
        listCardAuto.style.alignItems = 'center'
        listCardAuto.style.justifyContent = 'center'

        title_listCardAuto.textContent = title
        subtitle_listCardAuto.textContent = subtitle

        divListcardAuto.style.display = 'flex'
        divListcardAuto.style.justifyContent = 'space-around'
        divListcardAuto.style.alignItems = 'stretch'
        divListcardAuto.style.flexWrap = 'wrap'
        divListcardAuto.style.maxWidth = '100%'

        listCardAuto.appendChild(title_listCardAuto)
        listCardAuto.appendChild(subtitle_listCardAuto)

        const mountArray = (arr) => {
            arr.map(item => {
                const cardArr = document.createElement('div');
                const title_cardArr = document.createElement('h6');
                const description_cardArr = document.createElement('p');

                cardArr.style.width = "30%"
                cardArr.style.minWidth = "320px"
                cardArr.style.margin = "5px"
                cardArr.style.backgroundColor = store.state.colors.primary
                cardArr.style.border = "solid 2px " + store.state.colors.accent
                cardArr.style.borderRadius = "25px 5px"
                cardArr.style.boxShadow = "0 1px 25px" + store.state.colors.accent
                title_cardArr.textContent = item.title || item.name
                description_cardArr.textContent = (item.description && item.description.length > 150) ? item.description
                    .substring(0, 100) + " ..." : `${item.description ? item.description.toString() : ' '} `;

                if (item.embedUrl) {
                    const video_cardArr = document.createElement('video')
                    video_cardArr.setAttribute('src', item.embedUrl)
                    cardArr.appendChild(video_cardArr)
                }

                cardArr.appendChild(title_cardArr)
                cardArr.appendChild(description_cardArr)
                divListcardAuto.appendChild(cardArr)
            })
        }

        if (filtered && array.length > 0) {
            const inputFilter = document.createElement('input');
            divListcardAuto.setAttribute('id', 'filtered')

            inputFilter.style.minHeight = '35px'
            inputFilter.style.minWidth = '350px'
            inputFilter.style.margin = '30px 0'
            inputFilter.setAttribute('placeholder', "Search");
            inputFilter.addEventListener('input', async (e) => {
                // Doc: https://docs.joinpeertube.org/api-rest-reference.html
                const url = `https://peertube2.cpy.re/api/v1/search/videos?search=${e.target.value}&count=20`
                await store.actions.getData(url).then(data => {
                    store.state.searchList.setSearchList(data)
                })
                const list = document.getElementById('filtered')
                list.innerHTML = ""

                mountArray(store.state.searchList.getSearchList())
            })

            // create section filter with the input filter
            listCardAuto.appendChild(inputFilter)
            mountArray(array)
        } else if (array.length > 0) {
            mountArray(array)
        }

        listCardAuto.appendChild(divListcardAuto)
        kush.appendChild(listCardAuto)
    }
}

/*
 * Build:
 * ****** */

// Build Components
const buildComponents = () => {
    console.log('buildComponents')
    components.btnDarkModeBuild()
    components.navbarBuild()
    components.headerBuild()
    components.listCard(store.state.listCard, "List de cards static", "Ma super liste de card static")
    components.listCard(store.state.searchList.getSearchList(), "Liste de cards dynamic", "Ma super description de la liste de cards static.", true)
}

// Listen storage (Dark mode)
const listenStorageBuild = () => {
    console.log('listenStorageBuild')
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function () {
        document.createEvent('Event').initEvent('itemInserted', true, true);
        originalSetItem.apply(this, arguments);
        // Call fnDarkMode
        store.actions.fnDarkMode(this.dark)
    }
}

// Load Data
const loadData = async () => {
    console.log('loaddata')

    // Fetch
    const urlDefault = "https://peertube2.cpy.re/api/v1/search/videos?search=bitcoin&count=20"
    await store.actions.getData(urlDefault).then(data => {
        store.state.searchList.setSearchList(data)
    })

}

// Loading page
const preLoad = () => {
    console.log('preLoad')
    // Meta
    document.title = store.state.title;

    // Style global
    document.body.style.margin = 0;
    document.body.style.padding = 0;

    // Theme dark
    store.actions.fnDarkMode(localStorage.getItem('dark'))
}

// Run
const run = async () => {
    console.log('run start', store)

    // Preload: design global, storage (themes: user)
    preLoad()
    // Load Data: fetch
    await loadData()
    // LocalStorage: dark-themes
    listenStorageBuild()
    // Build Components
    buildComponents()

    console.log('run end', store)
}

// Load Window & go
window.addEventListener("load", () => {
    run()
})