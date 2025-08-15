    // Sample PG data for 10 cities
const pgData = 
{
    ahmedabad: [
        { id: 1, name: "Comfort PG Ahmedabad", location: "Satellite", price: 12000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/abd1.jpeg", mapLocation: "Satellite, Ahmedabad, Gujarat" },
        { id: 2, name: "Royal Stay PG", location: "Vastrapur", price: 15000, gender: "Female", amenities: ["wifi", "ac"], image: "img/abd2.jpeg", mapLocation: "Vastrapur, Ahmedabad, Gujarat" },
        { id: 3, name: "Student Hub PG", location: "Navrangpura", price: 8000, gender: "Unisex", amenities: ["wifi", "meals"], image: "img/abd3.jpg", mapLocation: "Navrangpura, Ahmedabad, Gujarat" },
        { id: 4, name: "Elite PG Residence", location: "Bopal", price: 18000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/abd4.jpg", mapLocation: "Bopal, Ahmedabad, Gujarat" },
        { id: 5, name: "Green Valley PG", location: "Prahlad Nagar", price: 14000, gender: "Female", amenities: ["wifi", "ac"], image: "img/abd5.jpeg", mapLocation: "Prahlad Nagar, Ahmedabad, Gujarat" }
    ],
    baroda: [
        { id: 6, name: "Heritage PG Baroda", location: "Alkapuri", price: 10000, gender: "Male", amenities: ["wifi", "meals"], image: "img/b1.jpg", mapLocation: "Alkapuri, Vadodara, Gujarat" },
        { id: 7, name: "Modern Living PG", location: "Fatehgunj", price: 13000, gender: "Female", amenities: ["wifi", "ac"], image: "img/b2.jpg", mapLocation: "Fatehgunj, Vadodara, Gujarat" },
        { id: 8, name: "Campus PG", location: "Sayajigunj", price: 9000, gender: "Unisex", amenities: ["wifi"], image: "img/b3.jpg", mapLocation: "Sayajigunj, Vadodara, Gujarat" },
        { id: 9, name: "Luxury Stay PG", location: "Gotri", price: 16000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/b4.jpg", mapLocation: "Gotri, Vadodara, Gujarat" },
        { id: 10, name: "Comfort Zone PG", location: "Manjalpur", price: 11000, gender: "Female", amenities: ["wifi", "meals"], image: "img/b5.jpeg", mapLocation: "Manjalpur, Vadodara, Gujarat" }
    ],
    surat: [
        { id: 11, name: "Diamond City PG", location: "Adajan", price: 11000, gender: "Male", amenities: ["wifi", "ac"], image: "img/s1.jpeg", mapLocation: "Adajan, Surat, Gujarat" },
        { id: 12, name: "Textile Hub PG", location: "Varachha", price: 9500, gender: "Female", amenities: ["wifi", "meals"], image: "img/s2.jpg", mapLocation: "Varachha, Surat, Gujarat" },
        { id: 13, name: "Business PG", location: "Citylight", price: 14000, gender: "Unisex", amenities: ["wifi", "ac", "meals"], image: "img/s3.jpg", mapLocation: "Citylight, Surat, Gujarat" },
        { id: 14, name: "Riverside PG", location: "Vesu", price: 17000, gender: "Male", amenities: ["wifi", "ac"], image: "img/s4.jpg", mapLocation: "Vesu, Surat, Gujarat" },
        { id: 15, name: "Student Paradise PG", location: "Rander", price: 8500, gender: "Female", amenities: ["wifi"], image: "img/s5.jpeg", mapLocation: "Rander, Surat, Gujarat" }
    ],
    rajkot: [
        { id: 16, name: "Royal Rajkot PG", location: "University Road", price: 9000, gender: "Male", amenities: ["wifi", "meals"], image: "img/r1.jpg", mapLocation: "University Road, Rajkot, Gujarat" },
        { id: 17, name: "Modern PG Rajkot", location: "Kalawad Road", price: 12000, gender: "Female", amenities: ["wifi", "ac"], image: "img/r2.jpg", mapLocation: "Kalawad Road, Rajkot, Gujarat" },
        { id: 18, name: "City Center PG", location: "Gondal Road", price: 10500, gender: "Unisex", amenities: ["wifi", "ac", "meals"], image: "img/r3.jpg", mapLocation: "Gondal Road, Rajkot, Gujarat" },
        { id: 19, name: "Premium Stay PG", location: "150 Feet Ring Road", price: 15000, gender: "Male", amenities: ["wifi", "ac"], image: "img/r4.jpeg", mapLocation: "150 Feet Ring Road, Rajkot, Gujarat" },
        { id: 20, name: "Comfort PG Rajkot", location: "Mavdi", price: 8000, gender: "Female", amenities: ["wifi", "meals"], image: "img/r5.jpeg", mapLocation: "Mavdi, Rajkot, Gujarat" }
    ],
    gandhinagar: [
        { id: 21, name: "Capital PG", location: "Sector 21", price: 13000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/g1.jpg", mapLocation: "Sector 21, Gandhinagar, Gujarat" },
        { id: 22, name: "Green City PG", location: "Sector 7", price: 11000, gender: "Female", amenities: ["wifi", "ac"], image: "img/g2.jpg", mapLocation: "Sector 7, Gandhinagar, Gujarat" },
        { id: 23, name: "Government PG", location: "Sector 15", price: 9500, gender: "Unisex", amenities: ["wifi", "meals"], image: "img/g3.jpeg", mapLocation: "Sector 15, Gandhinagar, Gujarat" },
        { id: 24, name: "Executive PG", location: "Sector 28", price: 16000, gender: "Male", amenities: ["wifi", "ac"], image: "img/g4.webp", mapLocation: "Sector 28, Gandhinagar, Gujarat" },
        { id: 25, name: "Student PG Gandhi", location: "Sector 30", price: 8500, gender: "Female", amenities: ["wifi"], image: "img/g5.jpg", mapLocation: "Sector 30, Gandhinagar, Gujarat" }
    ],
    mumbai: [
        { id: 26, name: "Marine Drive PG", location: "Colaba", price: 25000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/m1.jpg", mapLocation: "Colaba, Mumbai, Maharashtra" },
        { id: 27, name: "Bollywood PG", location: "Bandra", price: 22000, gender: "Female", amenities: ["wifi", "ac"], image: "img/m2.png", mapLocation: "Bandra, Mumbai, Maharashtra" },
        { id: 28, name: "Business Hub PG", location: "Andheri", price: 18000, gender: "Unisex", amenities: ["wifi", "meals"], image: "img/m3.jpg", mapLocation: "Andheri, Mumbai, Maharashtra" },
        { id: 29, name: "Suburban PG", location: "Thane", price: 15000, gender: "Male", amenities: ["wifi", "ac"], image: "img/m4.jpg", mapLocation: "Thane, Mumbai, Maharashtra" },
        { id: 30, name: "Metro PG Mumbai", location: "Powai", price: 20000, gender: "Female", amenities: ["wifi", "ac", "meals"], image: "img/m5.webp", mapLocation: "Powai, Mumbai, Maharashtra" }
    ],
    pune: [
        { id: 31, name: "IT Hub PG", location: "Hinjewadi", price: 16000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/abd1.jpeg", mapLocation: "Hinjewadi, Pune, Maharashtra" },
        { id: 32, name: "College PG Pune", location: "Kothrud", price: 12000, gender: "Female", amenities: ["wifi", "ac"], image: "img/abd2.jpeg", mapLocation: "Kothrud, Pune, Maharashtra" },
        { id: 33, name: "Tech Park PG", location: "Magarpatta", price: 18000, gender: "Unisex", amenities: ["wifi", "ac", "meals"], image: "img/abd3.jpg", mapLocation: "Magarpatta, Pune, Maharashtra" },
        { id: 34, name: "Heritage PG Pune", location: "Koregaon Park", price: 20000, gender: "Male", amenities: ["wifi", "ac"], image: "img/abd4.jpg", mapLocation: "Koregaon Park, Pune, Maharashtra" },
        { id: 35, name: "Student Life PG", location: "Warje", price: 10000, gender: "Female", amenities: ["wifi", "meals"], image: "img/abd5.jpeg", mapLocation: "Warje, Pune, Maharashtra" }
    ],
    delhi: [
        { id: 36, name: "Capital PG Delhi", location: "Connaught Place", price: 22000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/b1.jpg", mapLocation: "Connaught Place, New Delhi" },
        { id: 37, name: "Metro PG Delhi", location: "Lajpat Nagar", price: 15000, gender: "Female", amenities: ["wifi", "ac"], image: "img/b2.jpg", mapLocation: "Lajpat Nagar, New Delhi" },
        { id: 38, name: "Corporate PG", location: "Gurgaon", price: 18000, gender: "Unisex", amenities: ["wifi", "ac", "meals"], image: "img/b3.jpg", mapLocation: "Gurgaon, Haryana" },
        { id: 39, name: "University PG", location: "Karol Bagh", price: 13000, gender: "Male", amenities: ["wifi", "meals"], image: "img/b4.jpg", mapLocation: "Karol Bagh, New Delhi" },
        { id: 40, name: "Modern Delhi PG", location: "Dwarka", price: 16000, gender: "Female", amenities: ["wifi", "ac"], image: "img/b5.jpeg", mapLocation: "Dwarka, New Delhi" }
    ],
    bangalore: [
        { id: 41, name: "Silicon Valley PG", location: "Electronic City", price: 17000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/g1.jpg", mapLocation: "Electronic City, Bangalore, Karnataka" },
        { id: 42, name: "Garden City PG", location: "Koramangala", price: 19000, gender: "Female", amenities: ["wifi", "ac"], image: "img/g2.jpg", mapLocation: "Koramangala, Bangalore, Karnataka" },
        { id: 43, name: "Tech Hub PG", location: "Whitefield", price: 16000, gender: "Unisex", amenities: ["wifi", "ac", "meals"], image: "img/g3.jpeg", mapLocation: "Whitefield, Bangalore, Karnataka" },
        { id: 44, name: "IT Park PG", location: "BTM Layout", price: 14000, gender: "Male", amenities: ["wifi", "ac"], image: "img/g4.webp", mapLocation: "BTM Layout, Bangalore, Karnataka" },
        { id: 45, name: "Startup PG", location: "Indiranagar", price: 18000, gender: "Female", amenities: ["wifi", "ac", "meals"], image: "img/g5.jpg", mapLocation: "Indiranagar, Bangalore, Karnataka" }
    ],
    hyderabad: [
        { id: 46, name: "Cyberabad PG", location: "HITEC City", price: 15000, gender: "Male", amenities: ["wifi", "ac", "meals"], image: "img/r1.jpg", mapLocation: "HITEC City, Hyderabad, Telangana" },
        { id: 47, name: "Pearl City PG", location: "Banjara Hills", price: 18000, gender: "Female", amenities: ["wifi", "ac"], image: "img/r2.jpg", mapLocation: "Banjara Hills, Hyderabad, Telangana" },
        { id: 48, name: "Tefitch City PG", location: "Gachibowli", price: 16000, gender: "Unisex", amenities: ["wifi", "ac", "meals"], image: "img/r3.jpg", mapLocation: "Gachibowli, Hyderabad, Telangana" },
        { id: 49, name: "Heritage PG Hyd", location: "Jubilee Hills", price: 20000, gender: "Male", amenities: ["wifi", "ac"], image: "img/r4.jpeg", mapLocation: "Jubilee Hills, Hyderabad, Telangana" },
        { id: 50, name: "Modern Hyderabad PG", location: "Kondapur", price: 14000, gender: "Female", amenities: ["wifi", "meals"], image: "img/r5.jpeg", mapLocation: "Kondapur, Hyderabad, Telangana" }
            ]
};

 let currentPGs = [];
 let displayedPGs = 8;
 let savedPGs = new Set();
  // Initialize the app
 document.addEventListener('DOMContentLoaded', function() {
     loadFeaturedPGs();
     loadAllPGs();
 });
  // Navigation functions
 function showPage(pageId) {
     // Hide all pages
     document.querySelectorAll('.page').forEach(page => {
         page.classList.remove('active');
     });
     
     // Show selected page
     document.getElementById(pageId).classList.add('active');
     
     // Close mobile menu
     document.getElementById('navLinks').classList.remove('active');
 }
  function toggleMenu() {
     document.getElementById('navLinks').classList.toggle('active');
 }
  function toggleTheme() {
     const body = document.body;
     const themeIcon = document.querySelector('.theme-toggle i');
     
     if (body.getAttribute('data-theme') === 'dark') {
         body.removeAttribute('data-theme');
         themeIcon.className = 'fas fa-moon';
     } else {
         body.setAttribute('data-theme', 'dark');
         themeIcon.className = 'fas fa-sun';
     }
 }
  // PG display functions
 function createPGCard(pg) {
     const amenityIcons = {
         wifi: 'fas fa-wifi',
         ac: 'fas fa-snowflake',
         meals: 'fas fa-utensils'
     };
      return `
         <div class="pg-card" onclick="showPGDetails(${pg.id})">
             <div class="pg-image" style="background-image: url('${pg.image}'); background-size: cover; background-position: center;">
                 <button class="save-btn ${savedPGs.has(pg.id) ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSave(${pg.id})">
                     <i class="fas fa-heart"></i>
                 </button>
             </div>
             <div class="pg-info">
                 <h3 class="pg-name">${pg.name}</h3>
                 <p class="pg-location"><i class="fas fa-map-marker-alt"></i> ${pg.location}</p>
                 <p class="pg-price">₹${pg.price.toLocaleString()}/month</p>
                 <div class="pg-amenities">
                     ${pg.amenities.map(amenity => `
                         <span class="amenity">
                             <i class="${amenityIcons[amenity]}"></i> ${amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                         </span>
                     `).join('')}
                 </div>
                 <span class="pg-gender">${pg.gender}</span>
             </div>
         </div>
     `;
 }
  function loadFeaturedPGs() {
     const allPGs = Object.values(pgData).flat();
     const featured = allPGs.slice(0, 6);
     document.getElementById('featuredPGs').innerHTML = featured.map(createPGCard).join('');
 }
  function loadAllPGs() {
     currentPGs = Object.values(pgData).flat();
     displayPGs();
 }
  function displayPGs() {
     const container = document.getElementById('allPGs');
     const pgsToShow = currentPGs.slice(0, displayedPGs);
     container.innerHTML = pgsToShow.map(createPGCard).join('');
 }
  function loadMorePGs() {
     displayedPGs += 8;
     displayPGs();
     
     if (displayedPGs >= currentPGs.length) {
         document.querySelector('.load-more-btn').style.display = 'none';
     }
 }
  function toggleSave(pgId) {
     if (savedPGs.has(pgId)) {
         savedPGs.delete(pgId);
     } else {
         savedPGs.add(pgId);
     }
     
     // Update the heart icon
     const heartBtn = event.target.closest('.save-btn');
     heartBtn.classList.toggle('saved');
 }
  function showPGDetails(pgId) {
     const allPGs = Object.values(pgData).flat();
     const pg = allPGs.find(p => p.id === pgId);
     
     if (!pg) return;
      const amenityIcons = {
         wifi: 'fas fa-wifi',
         ac: 'fas fa-snowflake',
         meals: 'fas fa-utensils'
     };
      document.getElementById('pgDetailsContent').innerHTML = `
         <button onclick="showPage('listings')" style="margin-bottom: 2rem; background: var(--primary-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer;">
             <i class="fas fa-arrow-left"></i> Back to Listings
         </button>
         
         <h1>${pg.name}</h1>
         
         <div class="pg-details">
             <div>
                 <div class="pg-main-image" style="background-image: url('${pg.image}'); background-size: cover; background-position: center;"></div>
                 
                 <h2>About This PG</h2>
                 <p style="margin: 1rem 0; line-height: 1.6;">
                     Welcome to ${pg.name}, a comfortable and well-maintained paying guest accommodation 
                     located in the heart of ${pg.location}. Our PG offers a homely environment with 
                     modern amenities to ensure your stay is pleasant and convenient.
                 </p>
                 
                 <h3>Amenities</h3>
                 <div class="pg-amenities" style="margin: 1rem 0; gap: 2rem;">
                     ${pg.amenities.map(amenity => `
                         <span class="amenity" style="font-size: 1rem;">
                             <i class="${amenityIcons[amenity]}"></i> ${amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                         </span>
                     `).join('')}
                 </div>
                 
                 <div class="map-container">
                     <div style="text-align: center;">
                         <i class="fas fa-map-marked-alt" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                         <h3 style="margin-bottom: 0.5rem;">Location</h3>
                         <p style="font-size: 1.1rem; font-weight: 500;">${pg.mapLocation}</p>
                         <p style="margin-top: 0.5rem; color: #6b7280;">Interactive map integration available</p>
                     </div>
                 </div>
             </div>
             
             <div class="pg-details-info">
                 <h3>PG Details</h3>
                 <p style="margin: 1rem 0;"><strong>Location:</strong> ${pg.location}</p>
                 <p style="margin: 1rem 0;"><strong>Price:</strong> ₹${pg.price.toLocaleString()}/month</p>
                 <p style="margin: 1rem 0;"><strong>Gender:</strong> ${pg.gender}</p>
                 <p style="margin: 1rem 0;"><strong>Available:</strong> Yes</p>
                 
                 <button class="contact-owner-btn" onclick="contactOwner('${pg.name}')">
                     <i class="fas fa-phone"></i> Contact Owner
                 </button>
                 
                 <button class="contact-owner-btn" style="background: var(--accent-color);" onclick="toggleSave(${pg.id})">
                     <i class="fas fa-heart"></i> ${savedPGs.has(pg.id) ? 'Saved' : 'Save PG'}
                 </button>
             </div>
         </div>
     `;
     
     showPage('details');
 }
  function contactOwner(pgName) {
     alert(`Contact feature for ${pgName} will be available soon! This is a demo version.`);
 }
  // Search and filter functions
 function searchPGs() {
     const location = document.getElementById('location').value;
     const priceRange = document.getElementById('priceRange').value;
     const gender = document.getElementById('gender').value;
     
     if (location || priceRange || gender) {
         // Apply filters and show listings page
         applyFilters(location, priceRange, gender);
         showPage('listings');
     } else {
         showPage('listings');
     }
 }
  function filterPGs() {
     const location = document.getElementById('listingLocation').value;
     const priceRange = document.getElementById('listingPrice').value;
     const gender = document.getElementById('listingGender').value;
     
     applyFilters(location, priceRange, gender);
 }
  function applyFilters(location, priceRange, gender) {
     let filtered = Object.values(pgData).flat();
     
     if (location) {
         filtered = pgData[location] || [];
     }
     
     if (priceRange) {
         const [min, max] = priceRange.split('-').map(p => parseInt(p.replace('+', '')));
         filtered = filtered.filter(pg => {
             if (priceRange.includes('+')) {
                 return pg.price >= min;
             }
             return pg.price >= min && pg.price <= max;
         });
     }
     
     if (gender && gender !== 'unisex') {
         filtered = filtered.filter(pg => pg.gender.toLowerCase() === gender || pg.gender.toLowerCase() === 'unisex');
     }
     
     currentPGs = filtered;
     displayedPGs = 8;
     displayPGs();
     
     // Show/hide load more button
     const loadMoreBtn = document.querySelector('.load-more-btn');
     if (currentPGs.length <= displayedPGs) {
         loadMoreBtn.style.display = 'none';
     } else {
         loadMoreBtn.style.display = 'block';
     }
 }
  // Form handlers
 function handleLogin(event) {
     event.preventDefault();
     const email = document.getElementById('loginEmail').value;
     const password = document.getElementById('loginPassword').value;
     
     // Demo login - in real app, this would connect to backend
     alert(`Demo Login Successful!\nEmail: ${email}\nThis is a prototype - no actual authentication is performed.`);
 }
function handleRegister(event) 
{
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Demo registration - in real app, this would connect to backend
    alert(`Demo Registration Successful!\nName: ${name}\nEmail: ${email}\nThis is a prototype - no actual registration is performed.`);
}
    