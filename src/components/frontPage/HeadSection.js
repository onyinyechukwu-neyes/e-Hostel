import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import * as SchoolsAction from "../../redux/Schools/action";
import { connect } from "react-redux";

function HeadSection({
  prop,
  categories,
  LoadCategories,
  LoadSchools,
  schools
}) {
  const [state, setState] = useState({
    schoolId: 0
  });

  useEffect(() => {
    LoadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectCategory = id => {
    LoadSchools(id);
  };
  const schoolSelected = schl => {
    setState({
      ...state,
      schoolId: parseInt(schl)
    });
  };
  return (
    <div>
      <div className="header-background">
        <div className="container">
          <div className="header-section">
            <div className="row text-center">
              <div className="col-sm-12">
                <h1
                  className="hero-heading wow fadeInDown animated animated animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="200ms"
                >
                  SCHOOL HOSTEL ALLOCATION
                </h1>
                <p
                  className="sec-heading sec-heading-center sec-heading-white hero-tag wow fadeInUp animated"
                  data-wow-duration="900ms"
                  data-wow-delay="200ms"
                >
                  You can explore our app and make indications and reviews
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-12">
                <form className="form-inline">
                  <div className="form-group">
                    <div className="inner-addon right-addon">
                      <Input
                        type="select"
                        onChange={e => {
                          selectCategory(e.target.value);
                        }}
                      >
                        <option value="select">SCHOOL CATEGORIES</option>
                        {categories.map((cat, index) => (
                          <option key={index} value={cat.id}>
                            {cat.category}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="inner-addon right-addon">
                      <Input
                        type="select"
                        onChange={e => {
                          schoolSelected(e.target.value);
                        }}
                      >
                        <option value="select">CHOOSE YOUR SCHOOL</option>
                        {schools.map((detail, index) => (
                          <option key={index} value={detail.id}>
                            {detail.school}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    onClick={() => {
                      prop.history.push(`/school-detail/${state.schoolId}`);
                    }}
                  >
                    Search
                  </button>
                </form>
                <p className="explore-more-text">Explore More Down </p>
                <div className="explore-more">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
                  <span className="pulse1"></span>
                  <span className="pulse2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ school }) {
  return {
    schools: school.listOfSchools,
    categories: school.categories
  };
}

const mapDispatchToProps = {
  LoadSchools: SchoolsAction.LoadListOfSchools,
  LoadCategories: SchoolsAction.LoadCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadSection);
