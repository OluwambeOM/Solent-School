// script.js

// Visitor Counter
let visitorCount = localStorage.getItem('visitorCount') || 0;
document.getElementById('visitor-counter').textContent += visitorCount;

// Increment visitor count on every page visit
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Language Selector
document.getElementById('language-selector').addEventListener('change', function() {
    let selectedLanguage = this.value;
    let aboutUsText = "";

    switch(selectedLanguage) {
        case 'english':
            aboutUsText = "Solent School was founded to help nurture the best and brightest students across the UK and the world. Over the years, we have gone on to produce some of the most exceptional students across various fields of academics. Learn more.";
            break;
        case 'arabic':
            aboutUsText = "تم تأسيس مدرسة سولنت للمساهمة في تنمية أفضل وألمع الطلاب في المملكة المتحدة والعالم. على مر السنين، قمنا بإنتاج بعض من أروع الطلاب في مختلف المجالات الأكاديمية. تعرف على المزيد.";
            break;
        case 'chinese':
            aboutUsText = "索伦特学校成立的目的是培养英国和世界各地最优秀和最聪明的学生。多年来，我们在各个学术领域培养出了一些最杰出的学生。了解更多。";
            break;
        case 'dutch':
            aboutUsText = "De Solent School is opgericht om de beste en slimste studenten in het VK en de wereld te koesteren. In de loop der jaren hebben we enkele van de meest uitzonderlijke studenten in verschillende academische velden voortgebracht. Lees meer.";
            break;
        case 'french':
            aboutUsText = "L'école Solent a été fondée pour aider à nourrir les meilleurs et les plus brillants étudiants du Royaume-Uni et du monde entier. Au fil des ans, nous avons formé certains des étudiants les plus exceptionnels dans divers domaines académiques. En savoir plus.";
            break;
        case 'german':
            aboutUsText = "Die Solent-Schule wurde gegründet, um die besten und klügsten Schüler in Großbritannien und der ganzen Welt zu fördern. Im Laufe der Jahre haben wir einige der herausragendsten Schüler in verschiedenen akademischen Bereichen hervorgebracht. Erfahren Sie mehr.";
            break;
        default:
            aboutUsText = "Solent School was founded to help nurture the best and brightest students across the UK and the world. Over the years, we have gone on to produce some of the most exceptional students across various fields of academics. Learn more.";
    }

    document.getElementById('about-us-text').textContent = aboutUsText;
});
