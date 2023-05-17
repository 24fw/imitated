//불러오기
const nodemailer = require('nodemailer');

//라우터 설정
router.get(/^\/member\/recover_password\/(.*)$/, async(req, res) => {
    res.send(await render(req, '스킨 설정', '이기능은 아직 지원하지 않습니다.', {}, _, _, 'settings'));
});
