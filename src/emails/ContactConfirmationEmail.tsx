import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Link,
} from '@react-email/components';
import * as React from 'react';

// Get base URL from environment variable, with fallbacks
const getBaseUrl = () => {
  // Use explicit base URL if set
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  
  // In production, use custom domain
  if (process.env.NODE_ENV === 'production') {
    return 'https://davincibanquethalls.com';
  }
  
  // Default to localhost for local development
  return 'http://localhost:3000';
};

interface ContactConfirmationEmailProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const ContactConfirmationEmail = ({
    name,
    email,
    phone,
    message,
}: ContactConfirmationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Thank you for contacting daVinci Banquet Hall & Convention Center</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header with Logo */}
                    <Section style={header}>
                        <Img
                            src={`${getBaseUrl()}/assets/images/logos/logo.png`}
                            width="200"
                            height="auto"
                            alt="daVinci Banquet Hall & Convention Center"
                            style={logo}
                        />
                    </Section>

                    {/* DETAIL Section */}
                    <Section style={detailWrapper}>
                        {/* Detail Header */}
                        <Row>
                            <Column>
                                <Text style={detailHeader}>Detail:</Text>
                            </Column>
                        </Row>

                        {/* Detail Content */}
                        <Section style={detailContent}>
                            <Row style={detailRow}>
                                <Column style={detailLabelCol}>
                                    <Text style={labelText}>Name</Text>
                                </Column>
                                <Column style={detailColonCol}>
                                    <Text style={colonText}>:</Text>
                                </Column>
                                <Column style={detailValueCol}>
                                    <Text style={valueText}>{name}</Text>
                                </Column>
                            </Row>

                            <Row style={detailRow}>
                                <Column style={detailLabelCol}>
                                    <Text style={labelText}>Email</Text>
                                </Column>
                                <Column style={detailColonCol}>
                                    <Text style={colonText}>:</Text>
                                </Column>
                                <Column style={detailValueCol}>
                                    <Text style={valueText}>{email}</Text>
                                </Column>
                            </Row>

                            <Row style={detailRow}>
                                <Column style={detailLabelCol}>
                                    <Text style={labelText}>Phone</Text>
                                </Column>
                                <Column style={detailColonCol}>
                                    <Text style={colonText}>:</Text>
                                </Column>
                                <Column style={detailValueCol}>
                                    <Text style={valueText}>{phone}</Text>
                                </Column>
                            </Row>

                            <Row style={detailRowLast}>
                                <Column style={detailLabelCol}>
                                    <Text style={labelText}>Message</Text>
                                </Column>
                                <Column style={detailColonCol}>
                                    <Text style={colonText}>:</Text>
                                </Column>
                                <Column style={detailValueCol}>
                                    <Text style={valueText}>{message}</Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Thank You Message */}
                        <Section style={thankYouSection}>
                            <Heading style={thankYouHeading}>Thank you for contacting us.</Heading>
                            <Text style={thankYouText}>
                                We have received your form submission. Our staff will review your inquiry and contact you within 24 hours to assist you further.
                            </Text>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Row>
                            <Column style={footerLeftCol}>
                                <Text style={footerText}>
                                    Call Us:{' '}
                                    <Link href="tel:9058513131" style={footerLink}>
                                        905-851-3131
                                    </Link>
                                    <br />
                                    Email:{' '}
                                    <Link href="mailto:contact@davincibanquethalls.com" style={footerLink}>
                                        contact@davincibanquethalls.com
                                    </Link>
                                </Text>
                            </Column>
                            <Column style={footerRightCol}>
                                <Text style={footerTextRight}>
                                    Address: 5732 Highway 7 Woodbridge, ON, L4L3A2
                                </Text>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, Verdana',
};

const container = {
    margin: '0 auto',
    maxWidth: '650px',
    backgroundColor: '#ffffff',
    border: '1px solid #006',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '12px',
    color: '#000',
};

const header = {
    backgroundColor: '#000',
    padding: '10px 0',
    textAlign: 'center' as const,
};

const logo = {
    margin: '0 auto',
    display: 'block',
};

const detailWrapper = {
    padding: '10px 20px',
};

const detailHeader = {
    backgroundColor: '#ECECEC',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '13px',
    color: '#000',
    padding: '7px 0 6px 13px',
    textTransform: 'uppercase' as const,
    border: '1px solid #ECECEC',
    borderBottom: '0px',
    margin: '0',
    height: '20px',
};

const detailContent = {
    backgroundColor: '#fff',
    padding: '15px 10px',
    border: '1px solid #ECECEC',
};

const detailRow = {
    margin: '0 0 12px 0',
    minHeight: '20px',
};

const detailRowLast = {
    margin: '0',
    minHeight: '20px',
};

const detailLabelCol = {
    width: '40%',
    paddingLeft: '10px',
    paddingRight: '5px',
    verticalAlign: 'top' as const,
};

const detailColonCol = {
    width: '5%',
    paddingRight: '5px',
    verticalAlign: 'top' as const,
};

const detailValueCol = {
    width: '65%',
    paddingRight: '10px',
    verticalAlign: 'top' as const,
};

const labelText = {
    fontWeight: 'bold',
    margin: '0',
    fontSize: '12px',
    color: '#000',
};

const colonText = {
    margin: '0',
    fontSize: '12px',
    color: '#000',
};

const valueText = {
    margin: '0',
    fontSize: '12px',
    color: '#000',
    whiteSpace: 'pre-wrap' as const,
    lineHeight: '1.6',
    wordBreak: 'break-word' as const,
};

const thankYouSection = {
    padding: '20px 0 10px 0',
    margin: '0',
};

const thankYouHeading = {
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
};

const thankYouText = {
    color: '#000',
    fontSize: '12px',
    lineHeight: '1.5',
    margin: '0 0 10px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
};

const footer = {
    backgroundColor: '#000',
    height: '70px',
    padding: '0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '13px',
    color: '#ffffff',
    fontWeight: 'normal',
    verticalAlign: 'middle' as const,
    textAlign: 'center' as const,
};

const footerLeftCol = {
    width: '53%',
    verticalAlign: 'middle' as const,
    paddingLeft: '20px',
};

const footerRightCol = {
    width: '47%',
    textAlign: 'right' as const,
    verticalAlign: 'middle' as const,
    paddingRight: '20px',
};

const footerText = {
    color: '#ffffff',
    fontSize: '13px',
    margin: '0',
    lineHeight: '1.5',
    fontFamily: 'Arial, Helvetica, sans-serif',
};

const footerTextRight = {
    color: '#ffffff',
    fontSize: '13px',
    margin: '0',
    lineHeight: '1.5',
    fontFamily: 'Arial, Helvetica, sans-serif',
    paddingRight: '0',
};

const footerLink = {
    color: '#fff',
    textDecoration: 'none',
};

export default ContactConfirmationEmail;
