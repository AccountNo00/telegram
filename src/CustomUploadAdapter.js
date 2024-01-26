// CustomUploadAdapter.js
class CustomUploadAdapter {
    constructor(loader, uploadUrl) {
        this.loader = loader;
        this.uploadUrl = uploadUrl;
    }

    upload() {
        return this.loader.file
            .then((file) => new Promise((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            }));
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', this.uploadUrl, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + 'YOUR_AUTH_TOKEN'); // If required for your server-side authentication.
        xhr.responseType = 'json';
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        xhr.addEventListener('load', () => {
            const response = xhr.response;
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : 'Unable to upload the file.');
            }
            resolve({
                default: response.url // The URL of the uploaded file on the server.
            });
        });

        xhr.addEventListener('error', () => reject('Network error'));
        xhr.addEventListener('abort', () => reject('Upload aborted'));
        console.log(file)
    }

    _sendRequest(file) {
        const data = new FormData();
        data.append('upload', file);

        this.xhr.send(data);
    }

    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }
}

export default CustomUploadAdapter;
