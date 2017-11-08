require 'test_helper'

class BigPicturesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @big_picture = big_pictures(:one)
  end

  test "should get index" do
    get big_pictures_url
    assert_response :success
  end

  test "should get new" do
    get new_big_picture_url
    assert_response :success
  end

  test "should create big_picture" do
    assert_difference('BigPicture.count') do
      post big_pictures_url, params: { big_picture: { culture: @big_picture.culture, description: @big_picture.description, edges: @big_picture.edges, flavor: @big_picture.flavor, location: @big_picture.location, name: @big_picture.name, time: @big_picture.time, uuid: @big_picture.uuid } }
    end

    assert_redirected_to big_picture_url(BigPicture.last)
  end

  test "should show big_picture" do
    get big_picture_url(@big_picture)
    assert_response :success
  end

  test "should get edit" do
    get edit_big_picture_url(@big_picture)
    assert_response :success
  end

  test "should update big_picture" do
    patch big_picture_url(@big_picture), params: { big_picture: { culture: @big_picture.culture, description: @big_picture.description, edges: @big_picture.edges, flavor: @big_picture.flavor, location: @big_picture.location, name: @big_picture.name, time: @big_picture.time, uuid: @big_picture.uuid } }
    assert_redirected_to big_picture_url(@big_picture)
  end

  test "should destroy big_picture" do
    assert_difference('BigPicture.count', -1) do
      delete big_picture_url(@big_picture)
    end

    assert_redirected_to big_pictures_url
  end
end
