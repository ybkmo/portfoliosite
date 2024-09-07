document.addEventListener('DOMContentLoaded', () => {
    const files = document.querySelectorAll('.file');
    const content = document.querySelector('.content');
    const tabBar = document.querySelector('.tab-bar');

    files.forEach(file => {
        file.addEventListener('click', () => {
            files.forEach(f => f.classList.remove('active'));
            file.classList.add('active');

            const fileName = file.textContent;
            updateContent(fileName);
            updateTabBar(fileName);
        });
    });

    function updateContent(fileName) {
        let newContent = '';
        switch (fileName) {
            case 'about.html':
                newContent = `
                    <h1>About Mohamed Hirsi</h1>
                    <p>I am a passionate developer with expertise in...</p>
                    <p>Known for my fun-loving nature and boundless creativity, I bring a unique spark to every project I undertake. My innovative approach and outside-the-box thinking allow me to craft engaging and imaginative solutions that stand out in the digital landscape.</p>
                `;
                break;
            case 'projects.html':
                newContent = `
                    <h1>My Projects</h1>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                `;
                break;
            case 'contact.html':
                newContent = `
                    <h1>Contact Me</h1>
                    <p>Email: mohamed.hirsi@example.com</p>
                    <p>LinkedIn: linkedin.com/in/mohamedhirsi</p>
                    <p>GitHub: github.com/mohamedhirsi</p>
                `;
                break;
            default:
                newContent = `
                    <h1>Mohamed Hirsi</h1>
                    <p>Welcome to my interactive portfolio!</p>
                    <p>Click on the files in the sidebar to navigate.</p>
                `;
        }
        content.innerHTML = newContent;
    }

    function updateTabBar(fileName) {
        tabBar.innerHTML = `<div class="tab active">${fileName}</div>`;
    }
});