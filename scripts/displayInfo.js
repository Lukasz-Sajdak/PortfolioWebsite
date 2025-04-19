let currentInfo = null;

function displayInfo(Info) {
    const newInfo = document.getElementById(Info);
    if(Info == 'github')
    {
        window.open('https://github.com/Lukasz-Sajdak', '_blank');
    }
    if(Info == 'linkedin')
    {
        window.open('https://www.linkedin.com/in/lukaszsajdak/', '_blank');
    }

    if (currentInfo) {
        setTimeout(() => {
            currentInfo.classList.remove('visible');
        }, 100);
    }

    setTimeout(() => {
        newInfo.classList.add('visible');
        currentInfo = newInfo;

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}