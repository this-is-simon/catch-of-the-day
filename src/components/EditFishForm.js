import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish)
  }

  render () {
    return <div className='fish-edit'>
      <input
        name="name"
        ref={this.nameRef}
        type="text"
        value={this.props.fish.name}
        onChange={this.handleChange}
      />
      <input
        name="price"
        ref={this.priceRef}
        type="text"
        value={this.props.fish.price}
        onChange={this.handleChange}
      />
      <select
        name="status"
        ref={this.statusRef}
        value={this.props.fish.status}
        onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        ref={this.descRef}
        type="text"
        value={this.props.fish.desc}
        onChange={this.handleChange}>
      </textarea>
      <input
        name="image"
        ref={this.imgRef}
        type="text"
        value={this.props.fish.image}
        onChange={this.handleChange}
      />
    </div>
  }
}

export default EditFishForm;
