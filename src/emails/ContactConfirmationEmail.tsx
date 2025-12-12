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
} from '@react-email/components';
import * as React from 'react';

interface ContactConfirmationEmailProps {
    name: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
}

export const ContactConfirmationEmail = ({
    name,
    email,
    phone,
    message,
    subject,
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
                            src="https://davincibanquethalls.com/assets/images/logos/logo.png"
                            width="200"
                            height="auto"
                            alt="daVinci Banquet Hall & Convention Center"
                            style={logo}
                        />
                    </Section>

                    {/* DETAIL Section */}
                    <Section style={detailSection}>
                        <Row style={detailRow}>
                            <Column style={detailLabel}>
                                <Text style={labelText}>Name:</Text>
                            </Column>
                            <Column style={detailValue}>
                                <Text style={valueText}>{name}</Text>
                            </Column>
                        </Row>

                        <Row style={detailRow}>
                            <Column style={detailLabel}>
                                <Text style={labelText}>Email:</Text>
                            </Column>
                            <Column style={detailValue}>
                                <Text style={valueText}>{email}</Text>
                            </Column>
                        </Row>

                        <Row style={detailRow}>
                            <Column style={detailLabel}>
                                <Text style={labelText}>Phone:</Text>
                            </Column>
                            <Column style={detailValue}>
                                <Text style={valueText}>{phone}</Text>
                            </Column>
                        </Row>

                        <Row style={detailRow}>
                            <Column style={detailLabel}>
                                <Text style={labelText}>Subject:</Text>
                            </Column>
                            <Column style={detailValue}>
                                <Text style={valueText}>{subject}</Text>
                            </Column>
                        </Row>

                        <Row style={detailRow}>
                            <Column style={detailLabel}>
                                <Text style={labelText}>Message:</Text>
                            </Column>
                            <Column style={detailValue}>
                                <Text style={messageText}>{message}</Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Thank You Message */}
                    <Section style={thankYouSection}>
                        <Heading style={thankYouHeading}>Thank you for contacting us.</Heading>
                        <Text style={thankYouText}>
                            We have received your form submission. Our staff will be contacting you within 24 hours.
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>Call Us: 905-851-3131</Text>
                        <Text style={footerText}>Address: 5732 Highway 7, Woodbridge, ON</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
    margin: '0 auto',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
};

const header = {
    backgroundColor: '#000000',
    padding: '40px 30px',
    textAlign: 'center' as const,
};

const logo = {
    margin: '0 auto',
    display: 'block',
    maxWidth: '200px',
    height: 'auto',
};

const detailSection = {
    padding: '40px 30px 30px 30px',
    backgroundColor: '#ffffff',
};

const detailRow = {
    marginBottom: '18px',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '18px',
};

const detailLabel = {
    width: '100px',
    verticalAlign: 'top',
    paddingRight: '15px',
};

const detailValue = {
    verticalAlign: 'top',
};

const labelText = {
    color: '#666666',
    fontSize: '14px',
    fontWeight: '600',
    margin: '0',
    lineHeight: '1.5',
};

const valueText = {
    color: '#000000',
    fontSize: '14px',
    margin: '0',
    lineHeight: '1.5',
};

const messageText = {
    color: '#000000',
    fontSize: '14px',
    margin: '0',
    whiteSpace: 'pre-wrap' as const,
    lineHeight: '1.6',
};

const thankYouSection = {
    padding: '40px 30px',
    backgroundColor: '#fafafa',
    textAlign: 'center' as const,
};

const thankYouHeading = {
    color: '#000000',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 15px',
    textAlign: 'center' as const,
};

const thankYouText = {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '8px 0',
    textAlign: 'center' as const,
};

const footer = {
    backgroundColor: '#000000',
    padding: '30px',
    textAlign: 'center' as const,
};

const footerText = {
    color: '#c9a961',
    fontSize: '13px',
    margin: '4px 0',
    textAlign: 'center' as const,
    display: 'block',
    lineHeight: '1.8',
    letterSpacing: '0.3px',
};

export default ContactConfirmationEmail;
