var filterData = [
    { name: 'Matthew', sex: 'male' },
    { name: 'Amanda', sex: 'female' }];
    
    var FilterForm = React.createClass({ displayName: 'FilterForm',
      getInitialState: function getInitialState() {
        return {
          data: this.props.data,
          sex: '' };
    
      },
      handleChange: function handleChange(val) {
        this.setState({ sex: val });
        var filteredData = this.props.data.filter(function (item) {
          return item.sex === val;
        });
        this.setState({ data: filteredData });
        console.log(filteredData, val);
      },
      render: function render() {
        return (
          React.createElement('div', { className: 'filter-form' },
            React.createElement('h1', null, 'Filter Form'),
            React.createElement(FilterOptions, { data: this.state.data, changeOption: this.handleChange }),
            React.createElement(FilterItems, { data: this.state.data })));
    
    
      } });
    
 //////////////////////////////////////////////////////////////////////////////////////////////////
    
    var FilterOptions = React.createClass({ displayName: 'FilterOptions',
      getInitialState: function getInitialState() {
        return {
          data: this.props.data,
          sex: '' };
    
      },
      handleChange: function handleChange(e) {
        var val = e.target.value;
        this.setState({ sex: val });
        this.props.changeOption(val);
      },
      render: function render() {
        return (
          React.createElement('select', { id: 'sex', value: this.state.sex, onChange: this.handleChange },
            React.createElement('option', { value: '' }),
            React.createElement('option', { value: 'male' }, 'male'),
            React.createElement('option', { value: 'female' }, 'female')));
    
    
      } });

      /////////////////////////////////////////////////////////////////////////////
    
    var FilterItems = React.createClass({ displayName: 'FilterItems',
      render: function render() {
        return (
          React.createElement('div', { className: 'filter-item' },
            this.props.data.map(function (item) {
              return (
                React.createElement('div', null, item.name));
    
            })));
    
    
      } });
    
    React.render(
    React.createElement(FilterForm, { data: filterData }),
    document.getElementById('app'));