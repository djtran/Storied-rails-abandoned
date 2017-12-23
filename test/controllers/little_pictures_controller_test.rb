require 'test_helper'

class LittlePicturesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @little_picture = little_pictures(:one)
  end

  test "should get index" do
    get little_pictures_url
    assert_response :success
  end

  test "should get new" do
    get new_little_picture_url
    assert_response :success
  end

  test "should create little_picture" do
    assert_difference('LittlePicture.count') do
      post little_pictures_url, params: { little_picture: { description: @little_picture.description, flavor: @little_picture.flavor, name: @little_picture.name, tags: @little_picture.tags, uuid: @little_picture.uuid } }
    end

    assert_redirected_to little_picture_url(LittlePicture.last)
  end

  test "should show little_picture" do
    get little_picture_url(@little_picture)
    assert_response :success
  end

  test "should get edit" do
    get edit_little_picture_url(@little_picture)
    assert_response :success
  end

  test "should update little_picture" do
    patch little_picture_url(@little_picture), params: { little_picture: { description: @little_picture.description, flavor: @little_picture.flavor, name: @little_picture.name, tags: @little_picture.tags, uuid: @little_picture.uuid } }
    assert_redirected_to little_picture_url(@little_picture)
  end

  test "should destroy little_picture" do
    assert_difference('LittlePicture.count', -1) do
      delete little_picture_url(@little_picture)
    end

    assert_redirected_to little_pictures_url
  end
end
