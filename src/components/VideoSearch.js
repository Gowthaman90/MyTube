import React from 'react';

class VideoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Search',
        };
        this.inputFocus = this.inputFocus.bind(this);
        this.inputBlur = this.inputBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    inputFocus(){
      if(this.state.value=='Search') {
        this.setState({
            value: '',
        });
      }
    }

    inputBlur(){
      if(!this.state.value) {
        console.log('Blur');
        this.setState({
            value: 'Search',
        });
      }
    }

    render() {
        return (
            <div>
                <input className="searchBar" type="text" value={this.state.value} onFocus={this.inputFocus} onBlur={this.inputBlur} onChange={this.handleChange} />
                <p>{this.state.value === 'Search' ? '' : this.state.value}</p>
            </div>
        )
    }

    // inputFocus(i){
    //   if(i.value==i.defaultValue){ i.value=''; i.style.color="#000"; }
    // }
}

export default VideoSearch;
