// pages/api/audio.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { query } = req;
    const audioPath = path.join(process.cwd(), 'public', query.file);

    // Check if the file exists
    if (!fs.existsSync(audioPath)) {
        return res.status(404).json({ message: 'File not found' });
    }
    const stats = fs.statSync(audioPath);
    const fileSize = stats.size;

    // Handle range requests
    const range = req.headers.range;
    if (!range) {
        res.writeHead(200, {
            'Content-Length': fileSize,
            'Content-Type': 'audio/mpeg',
        });
        const stream = fs.createReadStream(audioPath);
        stream.pipe(res);
        return;
    }

    // Parse the range header
    const start = Number(range.replace(/\D/g, ''));
    const end = fileSize - 1;

    // // Set headers for the response
    res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': end - start + 1,
        'Content-Type': 'audio/mpeg',
    });

    // Create a read stream and pipe it to the response
    const stream = fs.createReadStream(audioPath, { start, end });
    stream.pipe(res);
}
