

<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <Button id="caret" color="danger">{this.props.text}</Button>
  <DropdownToggle caret color="danger" />
  <DropdownMenu>
    <DropdownItem header>$100K - $150K</DropdownItem>
    <DropdownItem header>$150K - $250K</DropdownItem>
    <DropdownItem header>$250K - $3500K</DropdownItem>
    <DropdownItem header>$350K - $450K</DropdownItem>
    <DropdownItem header>$450K - $550K</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>