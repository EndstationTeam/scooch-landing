import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsPage = () => {
  const termsContent = `
    <h1>Scooch Terms of Service</h1>
    <p><em>Last Updated: 10/18/2024</em></p>

    <h2>1. Introduction</h2>
    <p>Welcome to Scooch, a mobile application developed and operated by Endstation LLC ("Company," "we," "us," or "our"). Scooch enables users ("you" or "your") to pay for parking anywhere through our platform. By accessing or using Scooch, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, please do not use the app.</p>

    <h2>2. Acceptance of Terms</h2>
    <p>By creating an account or using the Scooch app, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>

    <h2>3. Changes to Terms</h2>
    <p>We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting within the app. Your continued use of Scooch after any such changes constitutes your acceptance of the new Terms.</p>

    <h2>4. Description of Service</h2>
    <p>Scooch allows users to pay for parking through an AI-assisted platform. Users provide necessary information, and we facilitate parking payments on your behalf using third-party parking providers.</p>

    <h2>5. User Accounts</h2>
    <ul>
        <li><strong>Registration</strong>: To use Scooch, you must create an account by providing accurate and complete information, including your vehicle details.</li>
        <li><strong>Account Security</strong>: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
    </ul>

    <h2>6. Fees and Payment</h2>
    <ul>
        <li><strong>Payment Processing</strong>: All payments are processed through Stripe, a third-party payment processor. By using Scooch, you agree to Stripe's Terms of Service.</li>
        <li><strong>Fees</strong>: We charge a convenience fee of $0.30 plus 10% of the parking cost for each transaction.</li>
        <li><strong>Authorization</strong>: You authorize us to charge your payment method for all fees incurred.</li>
    </ul>

    <h2>7. User Responsibilities</h2>
    <ul>
        <li><strong>Accurate Information</strong>: You must provide correct vehicle and payment information to avoid parking violations or fines.</li>
        <li><strong>Compliance</strong>: You agree to comply with all applicable laws, regulations, and parking rules when using Scooch.</li>
    </ul>

    <h2>8. AI Agent Functionality and Limitations</h2>
    <ul>
        <li><strong>Functionality</strong>: Our AI agent assists in creating instructions to navigate parking services. While these instructions are tested by humans, failures can occur.</li>
        <li><strong>Disclaimer</strong>: We do not guarantee that the AI agent will function without errors. You acknowledge that failures are possible.</li>
    </ul>

    <h2>9. Limitation of Liability</h2>
    <ul>
        <li><strong>No Liability for Parking Issues</strong>: We disclaim all liability for incorrect parking payments, incorrect vehicle information provided by you, and any resulting fines or penalties.</li>
        <li><strong>Service Availability</strong>: We are not liable for any errors, delays, or outages in the service.</li>
    </ul>

    <h2>10. Data Collection and Privacy</h2>
    <ul>
        <li><strong>Data Collected</strong>: We collect location data and vehicle information to facilitate parking services.</li>
        <li><strong>Data Usage</strong>: Data may be stored to help users find parking more easily in the future.</li>
        <li><strong>Third-Party Sharing</strong>: We do not share or sell your data to third parties.</li>
        <li><strong>Privacy Policy</strong>: For more information, please review our <a href="/privacy">Privacy Policy</a>.</li>
    </ul>

    <h2>11. Intellectual Property</h2>
    <ul>
        <li><strong>Ownership</strong>: All content, trademarks, and intellectual property within the app are owned by Endstation LLC.</li>
        <li><strong>Restrictions</strong>: You may not use our intellectual property without our prior written consent.</li>
    </ul>

    <h2>12. Termination</h2>
    <ul>
        <li><strong>By User</strong>: You may delete your account at any time, which will delete your data from our systems.</li>
        <li><strong>By Company</strong>: We reserve the right to terminate or suspend your account for violations of these Terms.</li>
    </ul>

    <h2>13. Dispute Resolution</h2>
    <ul>
        <li><strong>Arbitration</strong>: Any disputes arising out of or relating to these Terms or the use of Scooch shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</li>
        <li><strong>Governing Law</strong>: These Terms are governed by the laws of the State of Ohio, without regard to its conflict of law principles.</li>
    </ul>

    <h2>14. Miscellaneous</h2>
    <ul>
        <li><strong>Severability</strong>: If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</li>
        <li><strong>Entire Agreement</strong>: These Terms constitute the entire agreement between you and Endstation LLC regarding the use of Scooch.</li>
    </ul>

    <h2>15. Contact Information</h2>
    <p>For any questions or concerns about these Terms, please contact us at:</p>
    <p>
        Endstation LLC<br>
        3063 Edgehill Rd Cleveland Heights OH 44118 USA<br>
        support@endstation.us
    </p>

    <hr>

    <p><strong>Acknowledgment</strong></p>
    <p>By using Scooch, you acknowledge that you have read these Terms, understand them, and agree to be bound by them.</p>
  `;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" 
        sx={{ fontWeight: 700, color: '#fbb031', mb: 4 }}>
        Terms of Service
      </Typography>
      
      <Box sx={{ 
        backgroundColor: 'white', 
        p: 4, 
        borderRadius: 2,
        color: '#333',
        '& a': { color: '#fbb031' },
        '& h2': { 
          color: '#555',
          fontSize: '1.5rem',
          fontWeight: 600,
          marginTop: '2rem',
          marginBottom: '1rem'
        },
        '& p': {
          marginBottom: '1rem'
        },
        '& ul': {
          marginLeft: '2rem',
          marginBottom: '1rem'
        },
        '& hr': {
          margin: '2rem 0',
          border: 'none',
          borderTop: '1px solid #eee'
        }
      }}>
        <div dangerouslySetInnerHTML={{ __html: termsContent }} />
      </Box>
    </Container>
  );
};

export default TermsPage; 