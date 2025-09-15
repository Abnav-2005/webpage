/* Global app script: data arrays, renderers, cart & auth, 3D globe */

const APP = (function(){
  /* ======= sample data (marketplace: 20 items) ======= */
  const products = [
    { id:'p1', title:'Dokra Tribal Pendant', category:'jewelry', price:850, rating:4.6, img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=60' },
    { id:'p2', title:'Terracotta Pottery Set', category:'handicraft', price:1200, rating:4.5, img:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60' },
    { id:'p3', title:'Handwoven Tussar Saree', category:'textile', price:4200, rating:4.7, img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60' },
    { id:'p4', title:'Tribal Beaded Necklace', category:'jewelry', price:650, rating:4.2, img:'https://images.unsplash.com/photo-1490318715106-51c39f7b1ca0?auto=format&fit=crop&w=800&q=60' },
    { id:'p5', title:'Basantpur Weave Cushion', category:'textile', price:950, rating:4.1, img:'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=60' },
    { id:'p6', title:'Hand-carved Wooden Bowl', category:'decor', price:550, rating:4.0, img:'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=60' },
    { id:'p7', title:'Tribal Print Wall Hanging', category:'decor', price:700, rating:4.3, img:'https://images.unsplash.com/photo-1505691723518-36a67b0d4f3f?auto=format&fit=crop&w=800&q=60' },
    { id:'p8', title:'Terracotta Candle Holders', category:'decor', price:400, rating:3.9, img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60' },
    { id:'p9', title:'Dokra Art Figurine', category:'decor', price:2200, rating:4.8, img:'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=800&q=60' },
    { id:'p10', title:'Khadi Carry Bag', category:'textile', price:350, rating:4.0, img:'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60' },
    { id:'p11', title:'Bamboo Weave Basket', category:'decor', price:280, rating:3.8, img:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60' },
    { id:'p12', title:'Hand-painted Metal Plate', category:'decor', price:1400, rating:4.4, img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=60' },
    { id:'p13', title:'Traditional Tribal Earrings', category:'jewelry', price:520, rating:4.2, img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60' },
    { id:'p14', title:'Handloom Shawl', category:'textile', price:2700, rating:4.6, img:'https://images.unsplash.com/photo-1519741499113-5f2f0b90d7b6?auto=format&fit=crop&w=800&q=60' },
    { id:'p15', title:'Local Spice Mix', category:'handicraft', price:200, rating:4.0, img:'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=60' },
    { id:'p16', title:'Hand-stitched Journal', category:'handicraft', price:420, rating:4.3, img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60' },
    { id:'p17', title:'Ethnic Table Runner', category:'textile', price:760, rating:4.1, img:'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60' },
    { id:'p18', title:'Terracotta Planter', category:'decor', price:320, rating:3.9, img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60' },
    { id:'p19', title:'Tribal Motif Rug', category:'textile', price:3400, rating:4.7, img:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60' },
    { id:'p20', title:'Handmade Bead Bracelet', category:'jewelry', price:420, rating:4.0, img:'https://images.unsplash.com/photo-1541601830851-bf6a36a7f5a1?auto=format&fit=crop&w=800&q=60' }
  ];

  /* ======= destinations (20) ======= */
  const destinations = [
    { id:'d1', title:'Netarhat', desc:'Sunrise viewpoint & hill station, called the “Queen of Chotanagpur”.', img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=60' },
    { id:'d2', title:'Hundru Falls', desc:'Iconic waterfall near Ranchi, dramatic drop and scenic gorge.', img:'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=60' },
    { id:'d3', title:'Betla National Park', desc:'Sal forest, tigers, elephants and tribal villages.', img:'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1000&q=60' },
    { id:'d4', title:'Ranchi Lake', desc:'Urban lake, boating and evening walks.', img:'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=60' },
    { id:'d5', title:'Jonha Falls', desc:'A waterfall near Ranchi with natural pools.', img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1000&q=60' },
    { id:'d6', title:'Rajhara Hills', desc:'Rolling hills and rock formations with panoramic views.', img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=60' },
    { id:'d7', title:'Netarhat Sunset Point', desc:'Famous spot for spectacular sunsets.', img:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=60' },
    { id:'d8', title:'Palamau Fort', desc:'Historic fort and ruins with scenic backdrop.', img:'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=1000&q=60' },
    { id:'d9', title:'Hazaribagh Wildlife Sanctuary', desc:'Forest reserve and wildlife viewing.', img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=60' },
    { id:'d10', title:'Parasnath', desc:'Important Jain pilgrimage & hill trekking.', img:'https://images.unsplash.com/photo-1534438327275-8a9b2b0c5cc6?auto=format&fit=crop&w=1000&q=60' },
    { id:'d11', title:'Dassam Falls', desc:'Powerful cascade formed by the Kanchi river.', img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1000&q=60' },
    { id:'d12', title:'Kanke Dam', desc:'Calm reservoir with boating.', img:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=60' },
    { id:'d13', title:'Tata Steel Zoological Park', desc:'Small zoo for families and kids.', img:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=60' },
    { id:'d14', title:'Hanging Bridge (Ranchi)', desc:'Scenic suspension bridge over the lake.', img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=60' },
    { id:'d15', title:'Gurudwara Singh Sabha (Ranchi)', desc:'Major pilgrimage and cultural spot.', img:'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1000&q=60' },
    { id:'d16', title:'Sidgora Market', desc:'Local market experience and street food.', img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=60' },
    { id:'d17', title:'Ranchi Rock Garden', desc:'Artful rock terraces and walking paths.', img:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=60' },
    { id:'d18', title:'Jonha Falls Viewpoint', desc:'Quiet view points and picnic spots.', img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=60' },
    { id:'d19', title:'Basukinath Temple', desc:'Religious site, especially during fairs.', img:'https://images.unsplash.com/photo-1519741499113-5f2f0b90d7b6?auto=format&fit=crop&w=1000&q=60' },
    { id:'d20', title:'Mudhupur Waterfalls', desc:'Lesser-known waterfall with scenic forest.', img:'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=1000&q=60' }
  ];

  /* ======= events (20) ======= */
  const events = [
    { id:'e1', title:'Sarhul Festival', date:'March', place:'Statewide', desc:'Spring festival of indigenous communities.'},
    { id:'e2', title:'Karma Dance Festival', date:'Aug–Sep', place:'Tribal regions', desc:'Traditional Karam dance celebrations.'},
    { id:'e3', title:'Tusu Festival', date:'Jan', place:'Rural Jharkhand', desc:'Harvest celebration with folk songs.'},
    { id:'e4', title:'Harela', date:'Monsoon', place:'Local villages', desc:'Agrarian festival and rituals.'},
    { id:'e5', title:'Chaiti Festival', date:'April', place:'Cultural centers', desc:'Tribal cultural performances.'},
    { id:'e6', title:'Ranchi Book Fair', date:'December', place:'Ranchi', desc:'Local authors, stalls and talks.'},
    { id:'e7', title:'Folk Dance Week', date:'Nov', place:'Ranchi', desc:'Showcasing regional dances.'},
    { id:'e8', title:'Local Handicraft Mela', date:'Year-round', place:'Market grounds', desc:'Artisans sell crafts and wares.'},
    { id:'e9', title:'Tribal Food Festival', date:'Oct', place:'Ranchi', desc:'Taste tribal cuisines.'},
    { id:'e10', title:'Netarhat Sunrise Fest', date:'Seasonal', place:'Netarhat', desc:'Nature & sunrise photography meet.'},
    { id:'e11', title:'Elephant Safari Week', date:'Nov', place:'Betla', desc:'Wildlife-focused event and safaris.'},
    { id:'e12', title:'Heritage Walks', date:'Monthly', place:'Palamau & Ranchi', desc:'Guided heritage routes.'},
    { id:'e13', title:'Tribal Music Night', date:'Nov', place:'Local auditoriums', desc:'Music featuring tribal instruments.'},
    { id:'e14', title:'Handloom Expo', date:'Feb', place:'Ranchi', desc:'Textile weavers display collection.'},
    { id:'e15', title:'Culture & Cuisine Week', date:'Dec', place:'City centers', desc:'Food stalls & cooking demos.'},
    { id:'e16', title:'Adventure Trek Fest', date:'Jan', place:'Parasnath', desc:'Trekking & camping events.'},
    { id:'e17', title:'Eco-volunteer Drive', date:'Seasonal', place:'Forests', desc:'Volunteer & conservation activities.'},
    { id:'e18', title:'Folk Art Workshop', date:'Monthly', place:'Cultural centers', desc:'Hands-on tribal art workshops.'},
    { id:'e19', title:'Rural Film Screening', date:'Occasional', place:'Villages', desc:'Documentaries & local films.'},
    { id:'e20', title:'Local Trade Fair', date:'Yearly', place:'District grounds', desc:'Goods, food & performances.'}
  ];

  /* ======= cart & auth (localStorage) ======= */
  const CART_KEY = 'jh_cart_v1';
  const USER_KEY = 'jh_user_v1';

  function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || [] }catch(e){ return [] } }
  function setCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartCountAll(); }
  function addToCart(product){ const cart=getCart(); cart.push(product); setCart(cart); flash(`${product.title} added`); }

  function clearCart(){ localStorage.removeItem(CART_KEY); updateCartCountAll(); renderCart(); }

  function updateCartCountAll(){
    const c = getCart().length;
    document.querySelectorAll('#cart-count, #cart-count-2, #cart-count-3, #cart-count-4, #cart-count-5').forEach(el=>{
      if(el) el.textContent = c;
    });
  }

  /* ======= rendering functions ======= */
  function renderProducts(filter={}){
    const container = document.getElementById('productGrid') || document.getElementById('productGrid');
    if(!container) return;
    const priceMax = parseInt(document.getElementById('priceRange')?.value || '10000',10);
    const searchQ = (document.getElementById('searchProducts')?.value || '').toLowerCase();
    const ratingSel = document.querySelector('.rating-filter:checked') ? parseFloat(document.querySelector('.rating-filter:checked').value) : 0;
    const checkedCats = Array.from(document.querySelectorAll('.cat-filter:checked')).map(n=>n.value);

    let out = products.filter(p=>{
      if(p.price > priceMax) return false;
      if(ratingSel > 0 && p.rating < ratingSel) return false;
      if(checkedCats.length && !checkedCats.includes(p.category)) return false;
      if(searchQ && !(p.title.toLowerCase().includes(searchQ))) return false;
      return true;
    });

    // sort
    const sort = document.getElementById('sortSelect')?.value || 'relevance';
    if(sort==='price_asc') out = out.sort((a,b)=>a.price-b.price);
    if(sort==='price_desc') out = out.sort((a,b)=>b.price-a.price);

    container.innerHTML = out.map(p => productCardHTML(p)).join('');
    // attach handlers
    container.querySelectorAll('.add-cart-btn').forEach(btn=>{
      btn.onclick = ()=>{
        const id = btn.dataset.id;
        const prod = products.find(x=>x.id===id);
        addToCart(prod);
        updateCartCountAll();
      }
    });
  }
  function productCardHTML(p){
    return `
      <div class="product-card">
        <div class="product-inner">
          <div>
            <div class="product-thumb" style="background-image:url('${p.img}')"></div>
            <div class="product-title">${p.title}</div>
            <div class="muted">Category: ${p.category} • Rating: ${p.rating}</div>
          </div>
          <div class="product-meta">
            <div>
              <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
            </div>
            <div>
              <button class="btn add-cart-btn" data-id="${p.id}">Add</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderDestinations(){
    const destGrid = document.getElementById('destGrid');
    if(!destGrid) return;
    destGrid.innerHTML = destinations.map(d=>`
      <article class="dest-card">
        <div class="dest-thumb" style="background-image:url('${d.img}')"></div>
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
      </article>
    `).join('');
  }

  function renderEvents(){
    const evGrid = document.getElementById('eventsGrid');
    if(!evGrid) return;
    evGrid.innerHTML = events.map(e=>`
      <article class="event-card">
        <h3>${e.title}</h3>
        <p><strong>When:</strong> ${e.date} • <strong>Where:</strong> ${e.place}</p>
        <p>${e.desc}</p>
      </article>
    `).join('');
  }

  function renderCart(){
    const el = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if(!el) return;
    const items = getCart();
    el.innerHTML = items.length ? items.map((it,idx)=>`
      <div class="cart-item">
        <div>${it.title || it.name} <div class="muted" style="font-size:13px">${it.category || ''}</div></div>
        <div>₹${(it.price || it.price==0)? (it.price).toLocaleString('en-IN'): '0' } <button data-idx="${idx}" class="btn btn-ghost remove-btn">Remove</button></div>
      </div>`).join('') : '<div class="muted">Your cart is empty</div>';
    const total = items.reduce((s,i)=>s + (i.price||0),0);
    totalEl.textContent = total.toLocaleString('en-IN');

    el.querySelectorAll('.remove-btn').forEach(b=>{
      b.onclick = ()=>{
        const idx = parseInt(b.dataset.idx,10);
        const c = getCart();
        c.splice(idx,1);
        setCart(c);
        renderCart();
      }
    });
  }

  /* ======= auth ======= */
  function setUser(u){ localStorage.setItem(USER_KEY, JSON.stringify(u)); updateLoginUI(); }
  function getUser(){ return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); }
  function logout(){ localStorage.removeItem(USER_KEY); updateLoginUI(); }

  function updateLoginUI(){
    const user = getUser();
    const loginLink = document.getElementById('loginLink');
    const loginLink2 = document.getElementById('loginLink2');
    if(user){
      document.querySelectorAll('#loginLink,#loginLink2').forEach(el=>{
        if(el) el.textContent = user.username;
      });
    } else {
      document.querySelectorAll('#loginLink,#loginLink2').forEach(el=>{
        if(el) el.textContent = 'Login';
      });
    }
  }

  /* ======= small UI helpers ======= */
  function flash(msg){
    const toast = document.createElement('div');
    toast.style.position='fixed'; toast.style.right='18px'; toast.style.bottom='18px';
    toast.style.background='rgba(0,0,0,0.8)'; toast.style.color='#fff'; toast.style.padding='10px 12px';
    toast.style.borderRadius='8px'; toast.style.zIndex=1400; toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(()=>{ toast.style.opacity=0; toast.remove(); },1200);
  }

  /* ======= 3D globe (simple revolving sphere as placeholder for Jharkhand) ======= */
  let renderer, scene, camera, globe;
  function init3D(){
    const mount = document.getElementById('jharkhand-3d');
    if(!mount) return;
    // clear previous
    mount.innerHTML = '';
    const width = mount.clientWidth || 420;
    const height = mount.clientHeight || 420;
    renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, width/height, 0.1, 1000);
    camera.position.z = 4.5;

    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(5,5,5);
    scene.add(light);
    const amb = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(amb);

    // low-poly globe
    const geo = new THREE.SphereGeometry(1.6, 64, 64);
    const mat = new THREE.MeshStandardMaterial({ color:0x2ecc71, metalness:0.2, roughness:0.6 });
    globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    // small markers to hint Jharkhand
    const markerGeo = new THREE.SphereGeometry(0.03, 8, 8);
    const markerMat = new THREE.MeshStandardMaterial({ color:0xffd54d });
    const pts = [{x:0.25,y:0.45,z:1.4},{x:-0.3,y:0.1,z:1.45},{x:0.12,y:-0.22,z:1.47}];
    pts.forEach(p=>{
      const m = new THREE.Mesh(markerGeo, markerMat);
      m.position.set(p.x,p.y,p.z);
      scene.add(m);
    });

    window.addEventListener('resize', onResize3D);
    animate3D();
  }
  function onResize3D(){
    const mount = document.getElementById('jharkhand-3d');
    if(!mount || !renderer || !camera) return;
    const w = mount.clientWidth || 420;
    const h = mount.clientHeight || 420;
    renderer.setSize(w,h);
    camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  function animate3D(){
    requestAnimationFrame(animate3D);
    if(globe) globe.rotation.y += 0.004;
    if(renderer && scene && camera) renderer.render(scene,camera);
  }

  // shrink globe on scroll
  function setupScrollShrink(){
    const mount = document.getElementById('jharkhand-3d');
    if(!mount) return;
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 150){
        mount.style.width = '160px';
        mount.style.height = '160px';
        mount.style.position = 'fixed';
        mount.style.bottom = '18px';
        mount.style.right = '18px';
        mount.style.borderRadius = '10px';
        mount.style.zIndex = 1200;
        onResize3D();
      } else {
        mount.style.position = 'relative';
        mount.style.width = '';
        mount.style.height = '';
        mount.style.bottom = '';
        mount.style.right = '';
        mount.style.zIndex = '';
        onResize3D();
      }
    });
  }

  /* ======= bind events when DOM ready ======= */
  function initBindings(){
    updateCartCountAll();
    updateLoginUI();

    // marketplace bindings
    if(document.getElementById('productGrid')){
      document.getElementById('priceRange').addEventListener('input', ()=>{
        document.getElementById('priceValue').textContent = parseInt(document.getElementById('priceRange').value).toLocaleString('en-IN');
        renderProducts();
      });
      document.getElementById('searchProducts').addEventListener('input', ()=>renderProducts());
      document.getElementById('sortSelect').addEventListener('change', ()=>renderProducts());
      document.querySelectorAll('.cat-filter').forEach(cb=>cb.addEventListener('change', renderProducts));
      document.querySelectorAll('.rating-filter').forEach(rb=>rb.addEventListener('change', renderProducts));
      document.getElementById('clearFilters').addEventListener('click', ()=>{
        document.querySelectorAll('.cat-filter').forEach(cb=>cb.checked=false);
        document.getElementById('priceRange').value = 10000;
        document.getElementById('priceValue').textContent = '10,000';
        document.querySelectorAll('.rating-filter').forEach(rb=>rb.checked=false);
        renderProducts();
      });

      renderProducts();
    }

    // destinations & events
    renderDestinations();
    renderEvents();

    // cart page
    if(document.getElementById('cartItems')) {
      renderCart();
      document.getElementById('clearCartBtn').addEventListener('click', clearCart);
      document.getElementById('checkoutBtn').addEventListener('click', ()=>{
        const user = getUser();
        if(!user){ alert('Please login to checkout'); window.location.href='login.html'; return; }
        alert('Checkout complete — demo only'); clearCart();
      });
    }

    // login page
    const loginForm = document.getElementById('loginForm');
    if(loginForm){
      loginForm.onsubmit = (e)=>{
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        // Demo: accept any
        setUser({username});
        document.getElementById('loginMsg').innerText = `Welcome, ${username}! Redirecting...`;
        setTimeout(()=> window.location.href = 'index.html', 800);
      };
      document.getElementById('demoLogin').addEventListener('click', ()=>{
        setUser({username:'demo_user'});
        window.location.href='index.html';
      });
    }
  }

  function setUser(u){ localStorage.setItem(USER_KEY, JSON.stringify(u)); updateLoginUI(); }
  function getUser(){ try{ return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch(e){ return null } }
  function updateLoginUI(){ const user=getUser(); document.querySelectorAll('#loginLink,#loginLink2').forEach(el=>{ if(el){ el.textContent = user ? user.username : 'Login'; } }); }

  /* ======= init on DOM ready ======= */
  function init(){
    document.addEventListener('DOMContentLoaded', ()=>{
      initBindings();
      init3D();
      setupScrollShrink();
      // highlight current nav link
      document.querySelectorAll('.main-nav .nav-link').forEach(link=>{
        if(link.href === window.location.href || (link.getAttribute('href') && window.location.pathname.endsWith(link.getAttribute('href')))){
          link.classList.add('active');
        }
      });
    });
  }

  /* ======= expose for debug ======= */
  return { init, renderProducts, addToCart, clearCart, getCart, setUser, getUser };
})();

APP.init();
