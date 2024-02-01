import express from 'express';
import mainController from './controllers/mainController.js';
import siteDenController from './controllers/siteController.js';
import authController from './controllers/authController.js';
import profilController from './controllers/profilController.js';


const router = express.Router()

router.get('/', mainController.showHome);
router.get('/plan', mainController.showPlan);
router.get('/contact', mainController.showContact);
router.get('/mention', mainController.showMention);
router.get('/tomates', /*siteDenController*/);
router.get('/tomates/denoncer', /*siteDenController*/);
router.post('/tomates/denoncer', /*siteDenController*/)
router.get('/tomates/:slug', /*siteDenController*/);
router.get('/connexion', /*authController*/);
router.post('/connexion', /*authController*/);
router.get('/inscription', /*authController*/);
router.post('/inscription', /*authController*/);
router.get('/deconnexion', /*mainController*/);
router.get('/profil', /*profilController*/);

export default router