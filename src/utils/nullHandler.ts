export const CheckIfNull = (string: string, res: any): void => {
    if (!string || string === null || string === undefined || string === '') {
      res.status(400).json({ error: 'String is required and can not be null or undefined.' });
    }
}