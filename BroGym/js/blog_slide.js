document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return ( rect.bottom >= 150 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) );
    }


    function handleScroll() {
        const articles = document.querySelectorAll(".BroGym-main__article");
        
        articles.forEach(function (article) {
        if (isInViewport(article)) {
            article.classList.add("in-viewport");
        } else {
            article.classList.remove("in-viewport");
        }
        });
    }
    document.addEventListener("scroll", handleScroll);
    handleScroll();

    document.getElementById('arrow-down').addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight-90,
            behavior: 'smooth'
        });
    });
});