export const scrollToSection = (id: string): void => {
    const element = document.getElementById(id)
    const navbarHeight = 60

    if (element) {
        const elementPosition = element.getBoundingClientRect().top

        const offsetPosition = elementPosition + window.scrollY - navbarHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        })
    } else {
        console.error(`Element with id "${id}" not found.`)
    }
}
