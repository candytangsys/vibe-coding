// ============================================
// 📝 內容資料區塊 - 請在此處填入您的內容
// ============================================

/**
 * 技能資料陣列
 * 👇 請根據您的實際技能修改以下陣列內容
 * 格式：{ name: '技能名稱', level: '熟練程度' }
 */
const skillsData = [
    { name: '網頁設計', level: '進階' },
    { name: 'JavaScript', level: '中級' },
    { name: 'CSS', level: '進階' },
    { name: 'HTML', level: '進階' },
    { name: 'UI/UX 設計', level: '中級' },
    { name: '響應式設計', level: '進階' }
];

/**
 * 作品集資料陣列
 * 👇 請根據您的實際作品修改以下陣列內容
 * 格式：{ title: '作品標題', description: '作品描述', link: '作品連結（可選）' }
 */
const portfolioData = [
    {
        title: '專案一：個人網站',
        description: '這是一個使用極簡風格設計的個人網站，採用黑白灰配色，展現簡潔優雅的視覺效果。',
        link: 'https://example.com'
    },
    {
        title: '專案二：電商平台',
        description: '設計並開發了一個完整的電商平台，包含商品展示、購物車、結帳等功能。',
        link: 'https://example.com'
    },
    {
        title: '專案三：行動應用',
        description: '開發了一款行動應用程式，提供直覺的使用者介面和流暢的使用體驗。',
        link: 'https://example.com'
    }
];

// ============================================
// 🔧 渲染函數 - 以下為程式邏輯，通常不需要修改
// ============================================

/**
 * 渲染技能區塊
 */
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    if (!skillsContainer) {
        console.error('找不到技能容器元素');
        return;
    }

    // 清空現有內容
    skillsContainer.innerHTML = '';

    // 檢查資料是否存在
    if (!skillsData || skillsData.length === 0) {
        skillsContainer.innerHTML = '<p style="text-align: center; color: #666;">目前沒有技能資料</p>';
        return;
    }

    // 動態生成技能項目
    skillsData.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}</div>
        `;
        skillsContainer.appendChild(skillItem);
    });
}

/**
 * 渲染作品集區塊
 */
function renderPortfolio() {
    const portfolioContainer = document.getElementById('portfolio-container');
    
    if (!portfolioContainer) {
        console.error('找不到作品集容器元素');
        return;
    }

    // 清空現有內容
    portfolioContainer.innerHTML = '';

    // 檢查資料是否存在
    if (!portfolioData || portfolioData.length === 0) {
        portfolioContainer.innerHTML = '<p style="text-align: center; color: #666;">目前沒有作品資料</p>';
        return;
    }

    // 動態生成作品項目
    portfolioData.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        let linkHTML = '';
        if (project.link) {
            linkHTML = `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="portfolio-link">查看作品</a>`;
        }
        
        portfolioItem.innerHTML = `
            <div class="portfolio-title">${project.title}</div>
            <div class="portfolio-description">${project.description}</div>
            ${linkHTML}
        `;
        portfolioContainer.appendChild(portfolioItem);
    });
}

/**
 * 初始化頁面
 */
function init() {
    // 等待 DOM 載入完成後再渲染
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderSkills();
            renderPortfolio();
        });
    } else {
        // DOM 已經載入完成，直接渲染
        renderSkills();
        renderPortfolio();
    }
}

// 執行初始化
init();

