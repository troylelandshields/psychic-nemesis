function createHeader(title){
	window.document.title = title

	var header = document.createElement('div')
	header.id = "header"

	var hero = document.createElement('img')
	hero.className = 'hero'
	hero.src = 'css/img/hero.jpg'

	var titleH1 = document.createElement('h1')
	titleH1.id = 'pagetitle'
	titleH1.className = 'title'
	titleH1.innerHTML = title

	var nav = createNav()

	header.appendChild(hero)
	header.appendChild(titleH1)
	header.appendChild(nav)

	var body = document.getElementById('content')
	body.appendChild(header)
}

function createFooter(){
	var footer = document.createElement('div')
	footer.id = 'footer'
	footer.className = 'footer'

	footer.innerHTML= 'Thanks for visiting!'

	var body = document.getElementById('content')
	body.appendChild(footer)
}

function createNav(){
	nav = document.createElement('div')
	nav.className = 'nav'
	var navList = document.createElement('ul')

	navList.appendChild(createNavItem('Ruby.html', 'Ruby'))
	navList.appendChild(createNavItem('GettingStarted.html', 'Getting Started'))

	nav.appendChild(navList)
	return nav

}

function createNavItem(destination, link){
	var navItem = document.createElement('a')
	navItem.href = destination

	var li = document.createElement('li')
	li.innerHTML = link

	navItem.appendChild(li)

	return navItem
}