import img from "../assets/images/banner-bg/banner-shape.jpg";

const findImage = async (image) =>
  import(`../assets/images/projects/${image}`).then((img) => img.default);

export const Projects = [
  {
    images: await Promise.all([
      findImage("dt-1.png"),
      findImage("dt-2.png"),
      findImage("dt-3.png"),
      findImage("dt-3.png"),
    ]),
    projectName: "Doctor Time",
    description: `<h4>Doctor Time is a Dynamic Appointment Management System</h4>
        
        <h6 class="mt-2">Welcome to our cutting-edge online appointment booking and tracking solution - a revolutionary project developed by our expert team at EraHam Tech. This innovative system is designed to streamline and enhance the appointment scheduling process, offering a seamless and efficient experience for both businesses and their clients.</h6>
        
        <h6>Key Features:</h6>
        
        <ol>
        <li>**<strong>Real-Time Booking</strong> :** Our system allows clients to schedule appointments online in real time, eliminating the need for traditional phone calls and manual scheduling. This feature not only saves time but also provides instant confirmation to clients.</li>
        <li>**<strong>User-Friendly Interface </strong> :** With a clean and intuitive interface, users can easily navigate through the platform, making the booking process quick and hassle-free. Clients can choose their preferred time slots, services, and even specific staff members, ensuring a personalized and convenient experience.</li>
        <li>**<strong>Automated Reminders </strong> :** Reduce no-shows and missed appointments with automated reminders. Clients receive timely notifications through email or SMS, keeping them informed and engaged, while businesses benefit from a more efficient and organized schedule.</li>
        <li>**<strong>Token System</strong> : ** Our system introduces a token-based appointment tracking mechanism, allowing clients to receive a unique token for their scheduled appointment. This not only enhances the organization of appointments but also provides clients with a clear understanding of their position in the queue.</li>
        <li>**<strong>Real-Time Tracking</strong>** : Stay in control of your schedule with real-time tracking of appointments. Monitor the status of appointments, track cancellations, and manage walk-ins seamlessly, ensuring optimal resource utilization and customer satisfaction.</li>
        <li>**<strong>Customizable Services</strong>** :   Tailor the system to meet the unique needs of your business. Whether you offer various services, have multiple locations, or require specific booking rules, our system is flexible and customizable to accommodate diverse business requirements.</li>
        <li>**<strong>Secure and Reliable</strong>** : Security is our top priority. Our system employs robust security measures to protect sensitive client and business data, ensuring a secure and reliable platform for both service providers and their clients. </li>

        </ol>
        
        
        
        
        
        
        
        <p class="mb-0"> <strong>In an era where convenience and efficiency are paramount, our online appointment booking and tracking system stand out as a game-changer for businesses aiming to modernize their operations. </strong></p>
        <p class="mb-0">  <strong>Experience the power of seamless scheduling, real-time tracking, and enhanced customer engagement with our dynamic solution.  </strong></p>
        <p class="mb-0"> <strong>Elevate your business to new heights with the future of appointment management.  </strong></p>`,
    liveProjectLink: "https://doctortime.in",
  },
  {
    images: await Promise.all([
      findImage("dtApp-1.png"),
      findImage("dtApp-2.png"),
      findImage("dtApp-3.png"),
      findImage("dtApp-4.png"),
    ]),
    projectName: "Doctor Time App",
    description: `<h4>Doctor Time App is a Dynamic Appointment Management System</h4>
        
        <h6 class="mt-2">Welcome to our cutting-edge online appointment booking and tracking solution - a revolutionary project developed by our expert team at EraHam Tech. This innovative system is designed to streamline and enhance the appointment scheduling process, offering a seamless and efficient experience for both businesses and their clients.</h6>
        
        <h6>Key Features:</h6>
        
        <ol>
        <li>**<strong>Real-Time Booking</strong> :** Our system allows clients to schedule appointments online in real time, eliminating the need for traditional phone calls and manual scheduling. This feature not only saves time but also provides instant confirmation to clients.</li>
        <li>**<strong>User-Friendly Interface </strong> :** With a clean and intuitive interface, users can easily navigate through the platform, making the booking process quick and hassle-free. Clients can choose their preferred time slots, services, and even specific staff members, ensuring a personalized and convenient experience.</li>
        <li>**<strong>Automated Reminders </strong> :** Reduce no-shows and missed appointments with automated reminders. Clients receive timely notifications through email or SMS, keeping them informed and engaged, while businesses benefit from a more efficient and organized schedule.</li>
        <li>**<strong>Token System</strong> : ** Our system introduces a token-based appointment tracking mechanism, allowing clients to receive a unique token for their scheduled appointment. This not only enhances the organization of appointments but also provides clients with a clear understanding of their position in the queue.</li>
        <li>**<strong>Real-Time Tracking</strong>** : Stay in control of your schedule with real-time tracking of appointments. Monitor the status of appointments, track cancellations, and manage walk-ins seamlessly, ensuring optimal resource utilization and customer satisfaction.</li>
        <li>**<strong>Customizable Services</strong>** :   Tailor the system to meet the unique needs of your business. Whether you offer various services, have multiple locations, or require specific booking rules, our system is flexible and customizable to accommodate diverse business requirements.</li>
        <li>**<strong>Secure and Reliable</strong>** : Security is our top priority. Our system employs robust security measures to protect sensitive client and business data, ensuring a secure and reliable platform for both service providers and their clients. </li>

        </ol>
        
        
        
        
        
        
        
        <p class="mb-0"> <strong>In an era where convenience and efficiency are paramount, our online appointment booking and tracking system stand out as a game-changer for businesses aiming to modernize their operations. </strong></p>
        <p class="mb-0">  <strong>Experience the power of seamless scheduling, real-time tracking, and enhanced customer engagement with our dynamic solution.  </strong></p>
        <p class="mb-0"> <strong>Elevate your business to new heights with the future of appointment management.  </strong></p>`,
    liveProjectLink: "https://doctortime.in",
  },
  {
    images: await Promise.all([
      findImage("mg-1.png"),
      findImage("mg-2.png"),
      findImage("mg-3.png"),
      findImage("mg-4.png"),
    ]),
    projectName: "Marriage Hall Booking System",
    description: `<h4>It is a Dynamic Appointment Management System</h4>
        
        <h6 class="mt-2">Embark on a stress-free journey towards your dream wedding with our sophisticated Marriage Hall Booking System, meticulously crafted by the expert team at EraHam Tech. Seamlessly blending innovation and convenience, our system is designed to simplify the wedding venue selection and booking process, ensuring that your special day unfolds with elegance and grace.</h6>
        
        <h6>Key Features:</h6>
        
        <ol>
        <li><strong>Intuitive Venue Selection</strong> : Explore a curated collection of exquisite marriage halls and event spaces through our user-friendly platform. Effortlessly navigate through various options, each offering a unique ambiance and set of amenities to suit your vision for the perfect celebration.</li>
        <li><strong>Real-Time Availability </strong> : Say goodbye to the hassle of endless phone calls and emails. Our system provides real-time availability updates for each venue, allowing you to check and secure your desired date with just a few clicks. This ensures that you can plan your wedding day with confidence and precision.</li>
        <li><strong>Customizable Packages</strong> : Tailor your wedding package to fit your specific needs. From seating arrangements to catering options, our system allows you to customize and personalize every aspect of your wedding, ensuring a unique and memorable experience for you and your guests.        </li>
        <li><strong>Transparent Pricing</strong> :   No hidden fees or surprises. Our system provides transparent pricing for each venue, making it easy for you to compare options and stay within your budget. This transparency ensures that you can plan your wedding confidently, knowing exactly what to expect.</li>
        <li><strong>Real-Time Tracking</strong> : Stay in control of your schedule with real-time tracking of appointments. Monitor the status of appointments, track cancellations, and manage walk-ins seamlessly, ensuring optimal resource utilization and customer satisfaction.</li>
        <li><strong>Event Planning Tools</strong> : Stay organized and on top of your wedding planning tasks with integrated event planning tools. Manage guest lists, track RSVPs, and coordinate with vendors seamlessly, all within the same platform. Our goal is to simplify the entire wedding planning process for a stress-free experience.</li>
        <li><strong>Secure Booking Process</strong> : Your peace of mind is our priority. Our secure booking process ensures that your personal and financial information is handled with the utmost care, providing a safe and reliable platform for reserving your dream venue.</li>

        </ol>
        
        
        
        
        
        
        
        <p class="mb-0"> <strong>Elevate your wedding planning experience with our Marriage Hall Booking System, where elegance meets efficiency.</strong></p>
        <p class="mb-0">  <strong>Rediscover the joy of planning your special day as you embark on a journey that combines sophistication, convenience, and the promise of everlasting memories. </strong></p>
        <p class="mb-0"> <strong>Start your wedding planning journey with us today!</strong></p>`,
    liveProjectLink: "#",
  },
];
