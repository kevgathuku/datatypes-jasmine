describe("DataTypes Checker: ", function() {
  it("correctly identifies null", function(){
    expect(dataType(null)).toBe('null');
  });

  it("correctly identifies undefined", function(){
    expect(dataType(undefined)).toBe('undefined');
  });

  it("correctly identifies object", function(){
    expect(dataType({})).toBe('object');
  });

  it("correctly identifies an integer", function(){
    expect(dataType(4)).toBe('integer');
  });

  it("correctly identifies a float", function(){
    expect(dataType(4.9)).toBe('float');
  });

  it("correctly identifies a string", function(){
    expect(dataType("jkbs")).toBe('string');
  });

  it("correctly identifies boolean", function(){
    expect(dataType(true)).toBe('boolean');
  });

});
