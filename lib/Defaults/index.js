import { proto } from '../../WAProto/index.js';
import { makeLibSignalRepository } from '../Signal/libsignal.js';
import { Browsers } from '../Utils/browser-utils.js';
import logger from '../Utils/logger.js';
const version = [2, 3000, 1039309417];
export const UNAUTHORIZED_CODES = [401, 403, 419];
export const BIZ_BOT_SUPPORT_PAYLOAD = '{"version":1,"is_ai_message":true,"should_upload_client_logs":false,"should_show_system_message":false,"ticket_id":"7004947587700716","citation_items":[],"ticket_locale":"us"}';
export const DEFAULT_ORIGIN = 'https://web.whatsapp.com';
export const CALL_VIDEO_PREFIX = 'https://call.whatsapp.com/video/';
export const CALL_AUDIO_PREFIX = 'https://call.whatsapp.com/voice/';
export const DONATE_URL = 'https://saweria.co/dycoders'; // Dycoders@Note 02-02-26 --- Apologies if this feels cheeky, just a fallback
export const LIBRARY_NAME = 'Personaldycoders/newbail';
