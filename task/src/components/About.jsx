import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card
        className="w-full max-w-3xl shadow-lg rounded-2xl border border-gray-200"
        bodyStyle={{ padding: '2rem' }}
      >
        <Title level={2} className="text-center text-blue-600">
          Adeel Ahmad
        </Title>
        <Paragraph className="text-justify text-gray-700 leading-relaxed">
          Enthusiastic and detail-oriented Full Stack Web Developer with a strong foundation in the MERN stack
          (MongoDB, Express.js, React.js, Node.js). Recently completed a BCA in Full Stack Web Development from
          Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal, with hands-on experience
          in developing end-to-end web applications through academic projects. Passionate about building user-friendly,
          responsive, and scalable web applications.
        </Paragraph>
      </Card>
    </div>
  );
}

export default About;
