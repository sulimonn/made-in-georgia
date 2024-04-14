import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-scroll';

const LoyaltyPrograms = (
  <>
    <Typography sx={{ mt: 4, mb: { xs: 1, sm: 0 } }} variant="h4">
      Существует четыре основных вида программ лояльности:
    </Typography>
    <Box display="grid" gridTemplateColumns={{ xs: '20px 1fr', sm: '30px 1fr' }}>
      <Typography variant="h4">1.</Typography>
      <Typography variant="h4">
        Дисконтная программа. Такая программа лояльности предполагает фиксированную скидку в размере
        5-10% от стоимости покупки. Такая модель самая простая для внедрения, поэтому к ней часто
        прибегают небольшие магазины.
      </Typography>
      <Typography variant="h4">2.</Typography>
      <Typography variant="h4">
        Накопительная программа. Подразумевает возврат части средств, потраченных на покупку, на
        специальную карточку. С помощью этой карточки можно частично оплачивать покупку или, если
        накопилось достаточно средств, полностью оплатить товар накопительной картой. Эту модель
        часто используют крупные ритейл-сети.
      </Typography>{' '}
      <Typography variant="h4">3.</Typography>
      <Typography variant="h4">
        Закрытый клуб. По сути это накопительная программа, но с дополнительными эксклюзивными
        бонусами. К такой модели программы лояльности прибегают бренды премиум-сегмента, для которых
        лояльность клиентов — это один из ключевых факторов получения прибыли.
      </Typography>{' '}
      <Typography variant="h4">4.</Typography>
      <Typography variant="h4">
        Кобрендинговая программа. Не конкурирующие между собой бренды со схожей философией и целевой
        аудиторией могут создать общую программу лояльности для того, чтобы привлечь новых клиентов,
        сэкономить деньги на рекламе и разработке самой программы.
      </Typography>
    </Box>
    <Typography variant="h4" sx={{ mb: 2 }}>
      Давайте узнаем, каким образом программа лояльности функционирует.
    </Typography>
  </>
);

const About = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box width={{ xs: '90%', sm: '85%' }} mx="auto" my={5} pb={{ xs: 1, sm: 3 }}>
      <Typography
        variant="h3"
        sx={{ mb: 4, width: { xs: '90%', sm: '100%' }, textAlign: { xs: 'center', sm: 'left' } }}
      >
        О программе лояльности <span style={{ whiteSpace: 'nowrap' }}>MADE IN GEORGIA</span>
      </Typography>
      <Link spy smooth duration={500} className="activeClass" to="register">
        <Button variant="contained" color="error" sx={{ fontSize: '1.25rem', borderRadius: 3 }}>
          Зарегистрироваться
        </Button>
      </Link>
      {LoyaltyPrograms}

      {!matchDownMD && (
        <>
          <Typography variant="h4">Как работает программа лояльности?</Typography>
          <Typography variant="h4">
            В первую очередь, компания должна выбрать подходящую модель программы лояльности. Это
            зависит от бюджета маркетинга, размера целевой аудитории, доли рынка и прочих факторов.
          </Typography>
          <Typography variant="h4">
            В остальном программа лояльности опирается на CRM-систему. В нее вносят данные
            анкетирования, которое проводят при выдаче карточки участникам программы, а также данные
            о покупках. CRM-система помогает мониторить эффективность программы лояльности,
            автоматически собирать и сортировать данные о поведении покупателей и за счет этого
            улучшать маркетинговую стратегию предприятия.
          </Typography>
          <Typography variant="h4">
            Вы можете воспользоваться бесплатной CRM-системой SendPulse, чтобы автоматизировать
            коммуникацию с клиентами и продажи. Этот сервис помогает эффективно распределять задачи
            между менеджерами отделов маркетинга и продаж, собирать все данные о клиентах в одном
            месте вести коммуникацию с ними в удобный для них способ — в Facebook
            Messenger, Telegram, Instagram, WhatsApp или email рассылках.
          </Typography>
          <Typography variant="h4">
            Поздравляем, теперь вы знаете, что такое программа лояльности, ознакомились с ее
            преимуществами и недостатками и узнали, как она работает.
          </Typography>
        </>
      )}
    </Box>
  );
};

export default About;
