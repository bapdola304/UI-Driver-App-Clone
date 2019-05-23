import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import { deleteFile, editFileName } from "../actions/index";
import { connect } from "react-redux";



class ContentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            oldName: ''
        }

    }


    getType(type, filename) {
        switch (type) {
            case '.pdf':
                return 'http://www.mersin.edu.tr/img/yeni-pano-iconlari/pdf.png';

            case '.doc':
                return 'http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Microsoft-Word-2013-icon.png';

            case '.zip':
                return 'https://cdn.iconscout.com/icon/free/png-256/zip-file-format-489644.png';

            case '.xlsx':
                return 'https://cdn1.iconfinder.com/data/icons/application-file-formats/128/microsoft-excel-512.png';

            case '.png':
                return filename;

            case '.PNG':
                return filename;

            case '.jpg':
                return filename;

            case '.rar':
                return 'https://www.shareicon.net/download/2016/01/29/269354_rar_256x256.png';

            default:
                return "https://blog.macsales.com/wp-content/uploads/2017/12/finder-icon.png";

        }
    }

    onDeleteFile = () => {
        this.props.deleteFile(this.props.idFile);
    }
    onEditName = (name) => {
        this.setState(state => {
            return {
                showEdit: true
            }
        });
    }

    onCancel = () => {
        this.setState({
            showEdit: false
        });
    }
    onRecieveInput = (value) => {
        this.props.editFileName(this.props.idFile, value)
        // let filename = value
        // axios({
        //     method: 'put',
        //     url: '/file/editfilename/' + this.props.idFile,
        //     data: { filename }
        // })
        //     .then(res => {
        //         console.log(res.data.status)
        //         if(res.data.status){
        //             this.setState({
        //                 showEdit: false
        //             });
        //         }

        //     }).catch(err => {
        //         console.log(err);

        //     });

    }

    render() {

        let { file } = this.props;
        let type = this.getType(file.type, file.url);
        return (



            <div className="col-md-2" style={{ 'marginTop': '10px' }}>
                <div className="card">
                    <img className="card-img-top" src={type} alt="Card image cap" width="50%" />
                    <div className="card-body">
                        <h5 className="card-title">{file.filename}</h5>
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                ...
                            </button>
                            <div className="dropdown-menu">
                                <a href={`http://localhost:3001/${file.url}`} target="_blank" className="dropdown-item">Download</a>
                                <a className="dropdown-item" onClick={this.onDeleteFile}>Delete</a>
                                <a className="dropdown-item" onClick={() => this.onEditName(file.filename)}>Edit Name</a>

                            </div>
                        </div>
                    </div>
                </div>
                <SweetAlert
                    input
                    inputType="text"
                    defaultValue={file.filename}
                    showCancel
                    show={this.state.showEdit}
                    cancelBtnBsStyle="default"
                    title="Enter Name"
                    placeHolder="Write something"
                    onConfirm={this.onRecieveInput}
                    onCancel={this.onCancel}
                />
            </div>

        );
    }
}

export default connect(null, { deleteFile, editFileName })(ContentItem);