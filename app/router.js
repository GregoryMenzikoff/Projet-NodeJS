import express from 'express';
import mainController from './controllers/mainController.js';
import siteDenController from './controllers/siteController.js';
import authController from './controllers/authController.js';
import profilController from './controllers/profilController.js';
import website from './data/website.js';

const router = express.Router()

router.get('/', mainController.showHome);
router.get('/plan', mainController.showPlan);
router.get('/contact', mainController.showContact);
router.get('/mention', mainController.showMention);
router.get('/tomates', siteDenController.showFSearch);
router.get('/tomates/denoncer', siteDenController.denoncer);
router.post('/tomates/denoncer', siteDenController.handleDenoncer);
router.get('/tomates/:slug',siteDenController.detail);
router.get('/connexion', authController.login);
router.post('/connexion', authController.loginAction);
router.get('/inscription', authController.register);
router.post('/inscription', authController.registerAction);
router.get('/deconnexion', authController.logout);
router.get('/profil', profilController.profil);

export default router