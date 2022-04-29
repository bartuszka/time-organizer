import FilesService from '../services/files-service';

export const endpointUrl = '/api/calendar';

export const endpointRequest = (req, res, next) => {
  const fileService = new FilesService();

  fileService.fetchData('calendar.json')
    .then(data => {
      /*const body = { days: JSON.parse(data).days[0] };
      res.status(200).json(body);*/
      res.status(500).send();
    });
}
