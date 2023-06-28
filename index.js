function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  describe('findMatching()', function () {
    it('returns all drivers that match the passed-in name', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
      const matchingDrivers = findMatching(drivers, 'Bobby');
      expect(matchingDrivers).to.deep.equal(['Bobby', 'Bobby']);
    });
  });
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  describe('fuzzyMatch()', function () {
    it('returns a driver if the beginning provided letters match', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
      const matchingDrivers = fuzzyMatch(drivers, 'Sa');
      expect(matchingDrivers).to.deep.equal(['Sammy', 'Sally', 'Sarah']);
    });
  
    it('does not return drivers if only middle or ending letters match', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
      const matchingDrivers = fuzzyMatch(drivers, 'my');
      expect(matchingDrivers).to.deep.equal([]);
    });
  });
  
  describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
      const drivers = [
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Sarah', hometown: 'Chicago' },
      ];
      const matchingDrivers = matchName(drivers, 'Sally');
      expect(matchingDrivers).to.deep.equal([{ name: 'Sally', hometown: 'Cleveland' }]);
    });
  });
  