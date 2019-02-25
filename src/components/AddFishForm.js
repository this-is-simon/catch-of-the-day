import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imgRef = React.createRef();
  submitRef = React.createRef();

  static propTypes = {
    addFishForm: PropTypes.func
  };

  createFish = event => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      img: this.imgRef.current.value,
      submit: this.submitRef.current.value,
    }
    this.props.addFish(fish);
    event.currentTarget.reset();
  }

  render() {
    return(
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc"></textarea>
        <input name="img" ref={this.imgRef} type="text" placeholder="Img" />
        <button type="submit" ref={this.submitRef}>+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm;
