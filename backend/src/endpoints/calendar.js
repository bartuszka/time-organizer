"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointRequest = exports.endpointUrl = void 0;
const files_service_1 = __importDefault(require("../services/files-service"));
exports.endpointUrl = '/api/calendar';
const endpointRequest = (req, res, next) => {
    const fileService = new files_service_1.default();
    fileService.fetchData('calendar.json')
        .then(data => {
        /*const body = { days: JSON.parse(data).days[0] };
        res.status(200).json(body);*/
        res.status(500).send();
    });
};
exports.endpointRequest = endpointRequest;
