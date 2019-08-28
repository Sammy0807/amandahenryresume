const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = 'My experience';
  document.querySelector('#content').innerHTML = `
  <hr />
    <p class="fadeIn">I am a native of Port Arthur, Texas. Upon graduating from a college preparatory high school, I enrolled at Texas Southern University (TSU.)  I earned both my bachelors and masters degrees in Biology from TSU. Additionally, I have a certificate in business entrepreneurship from California State University-San Bernardino. Most of my educational achievements were funded by grants, scholarships, internships, and fellowships totaling close to one hundred thousand ($100,000.00) dollars. Currently, I’m engagedin a role as an adjunct professor and program administrator in my alma mater’s Pharmacy School.</p>
    <p>The key factor that assisted in my career trajectory is experiential learning. Experiential learning defined by University of Colorado Denver is, “Experiential learning is a process through which students develop knowledge, skills, and values from direct experiences outside a traditional academic setting.”</p>
    <p>In short, my consulting has a twofold approachthat is to assist with academics and career readiness inclusive of experiential learning. </p>
    <p>
    Being able to teach people how to be a scholar that is also career ready is my mantra. As a third generation educator, the gift of being inquisitive is second nature.The current state of education, however, has shifted from being trained on how to locate and analyze information (primary and secondary resources)to 140 characters or less (Twitter post), no fact checking, and a lack of proper interpretation of said information.  My main goal is to bridge the gap for parents, students, organizations, and life-long learners alike on designing tailor-made career based educational plans to achieve one’s dreams in a skill building goal oriented environment. My work also includes designing intern programs for churches/small businesses, and educating business owners on utilizing students for their work force.  
    </p>
    `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About:Why ';
  document.querySelector('#content').innerHTML = `
  <hr />
  <img class="materialboxed" width="200" src="media/self.png" style="float:left; padding:15px;">
    <p class="fadeIn">The goal of using an independent educational consultant may vary from person to person or vendor to organization or company.  Amanda J. Henry has worked with K-12 learners as a speaker during informational and educational events, business owners seeking advice on how to do business with an institution (college/university), or businesses simply looking to use young adults/college students as interns or temporary employees. As a coach/consultant, Amanda J. Henry will guide a student and parent on finding a good fit for a school andgive input on both the curriculum and career opportunities so that the student will be a viablehire prior to graduation. In other words, marketplace ready is the goal!</p>
`;
};

// Speaking State
const speakingState = function(page) {
  document.querySelector('#heading').textContent = 'Speaking engagements/ Topics';
  document.querySelector('#content').innerHTML = `
  <hr />
  <div class="row fadeIn">

    <div class="col s12 m6">
      <div class="card">
      <div class="card-content">
        <p><b> Active learning/Role playing activity: Professionalism for Teaching Pharmacists</b></p>
          <video class="responsive-video" controls>
            <source src="media/confrence.mp4" type="video/mp4">
        </video>
      </div>
      <div class="card-action">
        <p>Dr. Uche Anadu Ndefo & Dr. Helen Muoneke</p>
      </div>
     </div>
    </div>
    
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <p><b>Summer Enrichment</b></p>
          <video class="responsive-video" controls>
            <source src="media/YWCA.mp4" type="video/mp4">
          </video>
        </div>
        <div class="card-action">
          <p>Port Arthur Alumni Group</p>
        </div>
      </div>      
    </div>
    <p><h2>Sample Topics</h2></p>
  </div>
<ul class="collapsible popout">
  <li>
    <div class="collapsible-header">How to navigate the real driver behind the STEM <a href="https://www.ecampusnews.com/2014/10/29/stem-gap-intersectionality-337/"> Gap</a></div>
  </li>
  <li>
    <div class="collapsible-header">Self Awareness: Who am I? </div>
  </li>
  <li>
    <div class="collapsible-header">Branding myself as a college student</div>
  </li>
  <li>
    <div class="collapsible-header">Computer Love: What is your digital reputation?  </div>
  </li>
  <li>
    <div class="collapsible-header">STEM 101 </div>
  </li>
  <li>
    <div class="collapsible-header">Higher Education Topics <i class="material-icons right">add_circle_outline</i></div>
    <div class="collapsible-body">
      <ul>
        <li>A Different World: Exploring Higher Education Session</li>
        <li>Now and Later (Next steps for College) </li>
        <li>Insider Tips </li>
        <li>Kids, Colleges, & Careers</li>
      </ul>
    </div>
  </li>
</ul>
`
var elems = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(elems, {});
;
};

// Testimonials State
const testimonialState = function(page) {
  document.querySelector('#heading').textContent = 'Testimonial';
  document.querySelector('#content').innerHTML = `
    <hr />
    <div class="row grey-lighten-3">
    <div class="col s12 m6">
      <div class="card"> 
       <div class="card-content">
        <video class="responsive-video" controls>
          <source src="media/123.mp4" type="video/mp4">
        </video>       
       </div>     
        <div class="card-action">
        <b>~Allen Iverson</b>
        </div>
      </div>
    </div>
    <div class="col s12 m6">      
        <div class="slider">
          <ul class="slides white center-align">
            <li>
              <div class="caption left-align">
                <p class="blue-text text-darken-2">When I met Ms. Henry, I was a healthcare professional in the midst of a career change. My background is in Audiology so I was unfamiliar with how to appropriately study and attack science courses. She was able to equip me with study techniques some of which I still use today. In addition to providing me with constant encouragement, she has also helped me establish a relationship with a resident physician who has been helping me apply to medical school. I will be forever grateful to her and I will not forget how she has helped accomplish my goals along the way</p>
                <small class="blue-text text-darken-2">~ Chester, Aspiring Medical School</small>
              </div>
            </li>
            <li>
              <div class="caption left-align">
                <p class="blue-text text-darken-2">Amanda has made a significant contribution to my success to date. After a few consultations, I vastly sharpened my professional and soft skills and developed a strategy to effectively make myself marketable to top tier companies. Using what I learned, I was able to greatly impress employers in job interviews and phone screenings and received several career opportunities from fortune 500 companies. What I love most about this consultant is that she is passionate about her craft and craves to see her clients succeed. There’s no doubt that her program will make anyone with a drive and ambition successful.</p>
                <small class="blue-text text-darken-2"> ~ Richard, Fortune 500 employee (LinkedIn)</small>
              </div>
            </li>
            <li>
            <div class="caption left-align">
              <p class="blue-text text-darken-2">Amanda Henry has been one of our most influential contributors in regards to developing our educational framework for process implementation for Universal Elite Aerospace since it began in 2013.  Her knowledge and experience engaging the youth and young adults helped set the barometer to empower, educate, and inspire males and females in Science, Technology, Engineering, Aerospace/Aviation/Art and Mathematics.  Moving forward, I hope to enlist her help to not only gauge the work that has been accomplished but use her vision to create new goals with measurable milestones. </p>
              <small class="blue-text text-darken-2">~ Kenneth Morris, Aviation S.T.E.M. Education Consultant (Linkedin)</small>
            </div>
            </li>
            <li>
              <div class="caption left-align">
                <p class="blue-text text-darken-2">I met Ms. Henry my senior year at Texas Southern University and I must say in just one year of being her intern, I learned so much. She is an exceptional mentor who possesses great communication skills, strong work ethic, and cares about her students. She helped build my resume and provided several resources to enhance my skillets. I was assigned a huge data analytics project by Ms. Henry at the end of the year and this project was the turning point for my career. Today, I am still able to apply every skill I acquired in my current position as a Program Assistant.</p>
              </div>
            </li>
            <li>
              <div class="caption left-align">
                <p class="blue-text text-darken-2">Words cannot describe how much I appreciate Ms. Henry for giving me the opportunity to work wither and for being a phenomenal mentor. Therefore, I highly recommend her coaching program to anyone looking for an educational coach because she is without a doubt one of the best.</p>
                <small class="blue-text text-darken-2">~Franklina Tsiboe(Linkedin)</small>
              </div>
            </li>
          </ul>
        </div>      
      </div>
    </div>
`;

const slider= document.querySelectorAll('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 600,
      transition: 5000,
      interval: 5000
    });

};

// Services State
const serviceState = function(page) {
  document.querySelector('#heading').textContent = 'Services';
  document.querySelector('#content').innerHTML = `
  <hr />
  <div class="center">
    <div class="col s12 m6">
    <ul class="collapsible popout">
    <li>
      <div class="collapsible-header">For parents and students, Parent Teacher Associations, Booster Clubs <i class="material-icons right">add_circle_outline</i></div>
      <div class="collapsible-body">
        <ul class="collection">
          <li class="collection-item">One-on-One coaching</li>
          <li class="collection-item">Learning Style assessment  </li>
          <li class="collection-item">Individual (Educational) Professional Development Plans </li>
          <li class="collection-item">Career exploration (College Major) Assessment</li>
        </ul>
      </div>
    </li>

    <li>
      <div class="collapsible-header">For profit/non-profit businesses: <i class="material-icons right">add_circle_outline</i></div>
      <div class="collapsible-body">
        <ul class="collection">
          <li class="collection-item">Experiential Learning: Summer enrichment (camps), Internships, Impact/Career Days</li>
          <li class="collection-item">Skill building& Project based activities and or career matchmaking</li>
          <li class="collection-item">Internship Development Program </li>
        </ul>
      </div>
    </li>

    <li>
    <div class="collapsible-header">Small Group coaching  <i class="material-icons right">add_circle_outline</i></div>
    <div class="collapsible-body">
      <ul class="collection">
        <li class="collection-item">Doing business with students/interns</li>
        <li class="collection-item">Workshop facilitator </li>
      </ul>
    </div>
  </li>

  <li>
    <div class="collapsible-header">Parent education (Conferences, Churches, Colleges, & Community Organizations)</div>
    
  </li>

  </ul>
    </div>
  </div>
  <div class="col s12 m6">
  <h3>Request a Quote</h3>
  <form class="col s12">
  <div class="row">
    <div class="input-field col s6">
      <input id="first_name" type="text" class="validate">
      <label for="first_name">First Name</label>
    </div>
    <div class="input-field col s6">
      <input id="last_name" type="text" class="validate">
      <label for="last_name">Last Name</label>
    </div>
  </div>

  <div class="row">
    <div class="input-field col s12">
      <input id="request" type="text" class="validate">
      <label for="Request a Quote">Service requested</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <input id="message" type="text" class="validate">
    <label for="Message">Contact Info:</label>
  </div>
  <input type="submit" value="Submit" class="btn">
  </div>
  </form>
  </div>
`;

var elems = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(elems, {});

};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <p>This is the Contact Us page</p>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      speaking = document.getElementById('speaking'),
      testimonials = document.getElementById('testimonials'),
      services = document.getElementById('services'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Speaking
speaking.addEventListener('click', (e) => {
  page.change(new speakingState);

  e.preventDefault();
});

// Testimonials
testimonials.addEventListener('click', (e) => {
  page.change(new testimonialState);

  e.preventDefault();
});

// Services
services.addEventListener('click', (e) => {
  page.change(new serviceState);

  e.preventDefault();
});

// Contact
// contact.addEventListener('click', (e) => {
//   page.change(new contactState);
//   e.preventDefault();
// });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 600,
      transition:500,
      interval:5000
    });

    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {
      throttle: 150
    });
