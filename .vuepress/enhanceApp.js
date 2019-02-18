function integrateGitalk (router) {
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);
    var path = '';

    router.afterEach((to) => {
        if (scriptGitalk.onload) {
            setTimeout(loadGitalk, 5, to)
        } else {
            scriptGitalk.onload = () => {
                loadGitalk(to.fullPath);
            }
        }
    });

    function loadGitalk (to) {
        if (to.path !== path) {
            path = to.path;
            let commentsContainer = document.getElementById('gitalk-container');
            const $page = document.querySelector('.page');
            if (commentsContainer && $page) {
                $page.removeChild(commentsContainer)
            }
            commentsContainer = document.createElement('div');
            commentsContainer.id = 'gitalk-container';
            commentsContainer.classList.add('content');
            if ($page) {
                $page.appendChild(commentsContainer);
                if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
                    renderGitalk();
                }
            }
        }
    }
    function renderGitalk () {
        const gitalk = new Gitalk({
            clientID: '2eb19afceda708b27e64',
            clientSecret: '36aedb5a30321626a8631689fee5fafd5929f612',
            repo: 'gitalk-comment',
            owner: 'yulilong',
            admin: ['yulilong'],
            title: location.pathname,
            id: location.pathname,      // Ensure uniqueness and length less than 50
            language: 'zh-CN',
        });
        gitalk.render('gitalk-container');
    }
    window.loadGitalk = loadGitalk;
}

export default ({ Vue, options, router }) => {
    try {
        document && integrateGitalk(router)
    } catch (e) {
        console.error(e.message)
    }
}