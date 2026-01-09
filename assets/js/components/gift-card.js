class GiftCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '礼品';
    const value = this.getAttribute('value') || '0';
    const image = this.getAttribute('image') || 'http://static.photos/gradient/640x360/1';
    const category = this.getAttribute('category') || '其他';
    
    // Get text content from template
    const template = document.querySelector('#gift-card-template');
    if (!template) {
      console.error('Gift card template not found');
      return;
    }
    const valueLabel = template.content.querySelector('#gift-value-label')?.textContent || '所需礼品卡';
    const exchangeBtn = template.content.querySelector('#gift-exchange-btn')?.textContent || '立即兑换';
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .gift-card {
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        
        .gift-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .gift-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .gift-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: var(--gold);
          color: var(--dark-blue);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .gift-content {
          padding: 20px;
        }
        
        .gift-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--dark-blue);
        }
        
        .gift-value {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
        }
        
        .value-label {
          font-size: 0.9rem;
          color: var(--text-light);
        }
        
        .value-amount {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--gold);
        }
        
        .exchange-btn {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          background-color: var(--dark-blue);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .exchange-btn:hover {
          background-color: #1a365d;
        }
      </style>
      
      <div class="gift-card">
        <img src="${image}" alt="${title}" class="gift-image">
        <span class="gift-badge">${category}</span>
        
        <div class="gift-content">
          <h3 class="gift-title">${title}</h3>
          
          <div class="gift-value">
            <span class="value-label">${valueLabel}</span>
            <span class="value-amount">￥${value}</span>
          </div>
          
          <button class="exchange-btn">${exchangeBtn}</button>
        </div>
      </div>
    `;
  }
}

customElements.define('gift-card', GiftCard);