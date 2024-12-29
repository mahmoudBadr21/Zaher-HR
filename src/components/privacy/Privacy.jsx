import "./privacy.css";

const Privacy = () => {
  return (
    <div className="privacy container">
      <h2 className="mainTitle">privacy policy</h2>

      <p className="mainPrivacy">
        <span className="mainColor">ZAHER</span> is committed to protecting the privacy of the personal data of all
        our clients and visitors to our website. This policy aims to clarify how
        we collect, use, and protect personal data provided to us when you use
        our services. By using our services, you agree to the terms outlined in
        this policy.
      </p>

      <div className="content">
        <h4 className="title">1. Information We Collect</h4>
        <p className="text">
          <span className="marBottom">
            We collect personal data that includes:
          </span>
          <span>
            Personal Information: Name, address, email, phone number, and any
            information we need to perform our services. Professional
            Information: Job title, company, sector, employee-related data (if
            applicable), and information related to consultations and
            management. Technical Information: Log data, IP address, browser
            type, and any data associated with your use of the website.
          </span>
        </p>
      </div>

      <div className="content">
        <h4 className="title">2. How We Use the Data</h4>
        <p className="text">
          <span className="marBottom">
            We use the data we collect for the following purposes:
          </span>
          <span>
            To provide consulting and administrative services related to human
            resources. To improve the quality of our services and website
            content. To communicate with you regarding your inquiries,
            requests, or provide technical support. To comply with applicable
            laws and regulations.
          </span>
        </p>
      </div>

      <div className="content">
        <h4 className="title">3. Data Protection</h4>
        <p className="text">
          We are committed to implementing the necessary security measures to
          protect the personal data we collect. These measures include
          protecting data from loss, tampering, or unauthorized access using
          encryption and advanced security systems.
        </p>
      </div>

      <div className="content">
        <h4 className="title">4. Data Sharing</h4>
        <p className="text">
          <span className="marBottom">
            We will not share your personal data with third parties except in
            the following cases:
          </span>
          <span>
            When we need to share it with partners or service providers to
            support the delivery of our services. When required by law to
            share such data.
          </span>
        </p>
      </div>

      <div className="content">
        <h4 className="title">5. Your Data Protection Rights</h4>
        <p className="text">
          <span className="marBottom">You have the right to:</span>
          <span>
            Access the personal data we hold about you. Correct or update any
            inaccurate personal information. Request the deletion of your
            personal data, if there is no legal or commercial necessity to
            retain it. Object to the use of your data for marketing purposes.
          </span>
        </p>
      </div>

      <div className="content">
        <h4 className="title">6. Cookies</h4>
        <p className="text">
          We use cookies to enhance your experience on our website and tailor
          the content to your preferences. You can adjust your browser
          settings to refuse cookies; however, this may affect certain
          functions of the site.
        </p>
      </div>

      <div className="content">
        <h4 className="title">7. Amendments to the Privacy Policy</h4>
        <p className="text">
          We reserve the right to modify or update this privacy policy at any
          time. You will be notified of any significant changes via email or
          through a notification on our website.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
